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
  Platform,
  ActivityIndicator,
} from 'react-native';
import {images} from '../utils/Images';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import {constant} from '../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';
import {icons} from '../utils/Icons';

const {width: screenWidth} = Dimensions.get('window');
const SLIDER_WIDTH = screenWidth * 0.9;
const ITEM_WIDTH = SLIDER_WIDTH;
const IMAGE_HEIGHT = ITEM_WIDTH * 0.85;
const SLIDER_HEIGHT = IMAGE_HEIGHT + 120;

const ProfileDetailSlider = ({isSingleImage = false, page = 'detail'}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation<RootStackNavigationProp<'couponScreen'>>();

  const ImagesArray = isSingleImage 
    ? [{id: 1, uri: images.banner}] 
    : [
        {id: 1, uri: page === 'detail' ? images.detailed : images.banner},
        {id: 2, uri: page === 'detail' ? images.detailed : images.banner2},
        {id: 3, uri: images.banner3},
        {id: 4, uri: images.banner4},
        {id: 5, uri: images.banner5},
        {id: 6, uri: images.banner6},
      ];

  const moveToDetailPage = () => {
    navigation.navigate('couponScreen');
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / ITEM_WIDTH);
    setActiveIndex(currentIndex);
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / ITEM_WIDTH);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * ITEM_WIDTH,
        animated: true,
        duration: 300, // Smoother animation
      });
    }
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <View style={[styles.sliderWrapper, {width: SLIDER_WIDTH}]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={isSingleImage ? undefined : handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={32}
        contentContainerStyle={styles.scrollContent}
        contentInset={{left: 0, right: 0}}
        contentOffset={{x: 0, y: 0}}
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="center"
        decelerationRate="normal"
        disableIntervalMomentum={true}
        directionalLockEnabled={true}
        bounces={false}
        overScrollMode="never"
      >
        {ImagesArray.map(item => (
          <View key={item.id} style={[styles.slide, {width: ITEM_WIDTH}]}>
            <View style={[styles.imageContainer, {height: IMAGE_HEIGHT}]}>
              {loading && (
                <ActivityIndicator 
                  style={styles.loadingIndicator} 
                  size="large" 
                  color={colors.appColor} 
                />
              )}
              <Image 
                source={item.uri} 
                style={styles.image}
                resizeMode="cover"
                onLoad={handleImageLoad}
                fadeDuration={0}
              />
            </View>

            <TouchableOpacity 
              style={styles.chatButton}
              activeOpacity={0.7}
            >
              <Image source={icons.chatIcon} style={styles.chatImage} />
            </TouchableOpacity>

            <View style={styles.ratingBadge}>
              <Text style={styles.ratingBadgeText}>500 Bookings</Text>
            </View>

            <View style={styles.overlayContainer}>
              <View style={styles.profileWrapper}>
                {!isSingleImage && (
                  <TouchableOpacity 
                    style={styles.profileContainer}
                    onPress={() => navigation.navigate('profileDetail')}
                    activeOpacity={0.7}
                  >
                    <Image
                      source={images.profileImage}
                      style={styles.profileImage}
                    />
                    <View style={styles.greenDot} />
                  </TouchableOpacity>
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
                onPress={moveToDetailPage}
                activeOpacity={0.7}
              >
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
            <TouchableOpacity
              key={index}
              onPress={() => scrollToIndex(index)}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    alignSelf: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginVertical: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scrollContent: {
    paddingLeft: 0,
    marginLeft: 0,
    alignItems: 'center',
  },
  slide: {
    height: 'auto',
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    backgroundColor: colors.lightGray,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  chatButton: {
    position: 'absolute',
    bottom: 70,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 2,
  },
  chatImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
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
    zIndex: 2,
  },
  ratingBadgeText: {
    color: colors.black,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
  },
  overlayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
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
  overlayRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
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
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
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

export default ProfileDetailSlider;