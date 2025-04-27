import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../utils/Images';
import { colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { constant } from '../../utils/Constant';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const { width: viewportWidth } = Dimensions.get('window');

const BookingDetailSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const ImagesArray = [
    { id: 1, uri: images.banner },
    { id: 2, uri: images.banner2 },
    { id: 3, uri: images.banner3 },
    { id: 4, uri: images.banner4 },
    { id: 5, uri: images.banner5 },
    { id: 6, uri: images.banner6 },
  ];

    const navigation = useNavigation<RootStackNavigationProp<'couponScreen'>>();
    
    const moveToDetailPage = () => {
      navigation.navigate('couponScreen');
    }
  

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / viewportWidth);
    setActiveIndex(currentIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * viewportWidth, animated: true });
    }
  };

  return (
    <View style={styles.sliderWrapper}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16} 
      >
        {ImagesArray.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.uri} style={styles.image} />
            
            <View style={styles.overlayContainer}>
              <View style={styles.overlayLeft}>
                <Text style={styles.title}>{constant.studioExperts}</Text>
                <Text style={styles.subtitle}>{constant.maternity}</Text>
              </View>
              <TouchableOpacity style={styles.overlayRight} onPress={() => {moveToDetailPage()}}>
                <Text style={styles.rating}>★★★★☆</Text>
                <Text style={styles.ratingText}>4/5</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {ImagesArray.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorDot,
              index === activeIndex ? styles.activeDot : styles.inactiveDot,
            ]}
            onTouchEnd={() => scrollToIndex(index)} 
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    height: 413,
    width: "90%",
    alignSelf: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginVertical: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  slide: {
    width: viewportWidth * 0.9,
    height: 413,
    position: 'relative',
  },
  image: {
    width: "100%",
    height: 350,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  overlayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  overlayLeft: {},
  overlayRight: { alignItems: 'flex-end' },
  
  title: {
    fontSize: 16,
    color: colors.black,
    fontFamily: Fonts.semiBold,
  },
  subtitle: {
    fontSize: 12,
    color: colors.placeHolderColor,
    fontFamily: Fonts.regular
  },
  rating: {
    fontSize: 16,
    color: colors.starColor,
    fontFamily : Fonts.semiBold,
  },
  ratingText: {
    fontSize: 14,
    color: colors.black,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.appColor,
  },
  inactiveDot: {
    backgroundColor: colors.lightGray,
  },
});

export default BookingDetailSlider;
