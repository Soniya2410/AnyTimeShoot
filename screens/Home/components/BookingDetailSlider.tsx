import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Carousel from '@snap-carousel/react-native-snap-carousel';
import { images } from '../../utils/Images';
import { colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { constant } from '../../utils/Constant';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const { width: screenWidth } = Dimensions.get('window');
const SLIDER_WIDTH = screenWidth;
const ITEM_WIDTH = screenWidth * 0.9;
const IMAGE_HEIGHT = ITEM_WIDTH * 0.75;
const SLIDER_HEIGHT = IMAGE_HEIGHT + 80;

const BookingDetailSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigation = useNavigation<RootStackNavigationProp<'couponScreen'>>();

  const ImagesArray = [
    { id: 1, uri: images.banner },
    { id: 2, uri: images.banner2 },
    { id: 3, uri: images.banner3 },
    { id: 4, uri: images.banner4 },
    { id: 5, uri: images.banner5 },
    { id: 6, uri: images.banner6 },
  ];

  const moveToDetailPage = () => {
    navigation.navigate('couponScreen');
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={[styles.slide, { width: ITEM_WIDTH }]}>
        <Image source={item.uri} style={[styles.image, { height: IMAGE_HEIGHT }]} />
        
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{constant.studioExperts}</Text>
            <Text style={styles.subtitle}>{constant.maternity}</Text>
          </View>
          <TouchableOpacity 
            style={styles.ratingContainer}
            onPress={moveToDetailPage}
            activeOpacity={0.7}
          >
            <Text style={styles.rating}>★★★★☆</Text>
            <Text style={styles.ratingText}>4/5</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Carousel
        ref={carouselRef}
        data={ImagesArray}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setActiveIndex(index)}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}
        loop={false}
        autoplay={false}
        layout={'default'}
        contentContainerCustomStyle={styles.carouselContent}
      />
      
      <View style={styles.indicatorContainer}>
        {ImagesArray.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => carouselRef.current?.snapToItem(index)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.indicatorDot,
                index === activeIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
  },
  carouselContent: {
    paddingVertical: 10,
  },
  slide: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  textContainer: {
    flex: 1,
  },
  ratingContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontFamily: Fonts.semiBold,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: colors.placeHolderColor,
    fontFamily: Fonts.regular,
  },
  rating: {
    fontSize: 16,
    color: colors.starColor,
    fontFamily: Fonts.semiBold,
    letterSpacing: 2,
  },
  ratingText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: Fonts.regular,
    marginTop: 2,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.appColor,
    width: 12,
  },
  inactiveDot: {
    backgroundColor: colors.lightGray,
  },
});

export default BookingDetailSlider;