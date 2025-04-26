import React, {useRef, useState} from 'react';
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
import {images} from '../utils/Images';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import {constant} from '../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';

const {width: viewportWidth} = Dimensions.get('window');

const ProfileDetailSlider = ({isSingleImage = true, page = 'home'}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const ImagesArray = isSingleImage 
    ? [{id: 1, uri: images.banner}] 
    : [
        {id: 1, uri: page == 'detail' ? images.detailed : images.banner},
        {id: 2, uri: page == 'detail' ? images.detailed : images.banner2},
        {id: 3, uri: images.banner3},
        {id: 4, uri: images.banner4},
        {id: 5, uri: images.banner5},
        {id: 6, uri: images.banner6},
      ];

  const navigation = useNavigation<RootStackNavigationProp<'couponScreen'>>();

  const moveToDetailPage = () => {
    navigation.navigate('couponScreen');
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / viewportWidth);
    setActiveIndex(currentIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * viewportWidth,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.sliderWrapper}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={isSingleImage ? undefined : handleScroll}
        scrollEventThrottle={16}>
        {ImagesArray.map(item => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.uri} style={styles.image} />

            <TouchableOpacity style={styles.chatButton}>
              <Image source={images.chatImg} style={styles.chatImage} />
            </TouchableOpacity>

            
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingBadgeText}>500 Bookings</Text>
              </View>
            

            <View style={styles.overlayContainer}>
              <View style={styles.profileWrapper}>
                {!isSingleImage && (
                  <View style={styles.profileContainer}>
                    <Image
                      source={images.profileImage}
                      style={styles.profileImage}
                    />
                    <View style={styles.greenDot} />
                  </View>
                )}
                <View style={[
                  styles.textContainer,
                  isSingleImage && {marginLeft: 0} 
                ]}>
                  <Text style={styles.title}>{constant.studioExperts}</Text>
                  <Text style={styles.subtitle}>{constant.maternity}</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.overlayRight}
                onPress={moveToDetailPage}>
                <Text style={styles.rating}>★★★★☆</Text>
                <Text style={styles.ratingText}>4/5</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      
      {!isSingleImage && (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chatButton: {
    position: 'absolute',
    bottom: 70,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  chatImage: {
    width: 15,
    height: 13,
    resizeMode: 'contain',
  },
  greenDot: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: colors.white,
  },
  textContainer: {
    marginLeft: 10,
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },  activeDot: {
    backgroundColor: colors.appColor,
  },
  inactiveDot: {
    backgroundColor: colors.lightGray,
  },
  ratingBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.starColor,
    borderBottomRightRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingBadgeText: {
    color: colors.black,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    top: 330,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontFamily: Fonts.semiBold,
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 12,
    color: colors.placeHolderColor,
    fontFamily: Fonts.regular,
    marginLeft: 10,
  },
  rating: {
    fontSize: 16,
    color: colors.starColor,
    fontFamily: Fonts.semiBold,
  },
  ratingText: {
    fontSize: 14,
    color: colors.black,
  },  overlayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  overlayLeft: {},
  overlayRight: {
    marginRight: 16,
    top: 2,
  },
  sliderWrapper: {
    height: 413,
    width: 360,
    alignSelf: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginVertical: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  slide: {
    width: 360,
    height: 413,
    position: 'relative',
  },
  image: {
    width: 360,
    height: 350,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default ProfileDetailSlider;