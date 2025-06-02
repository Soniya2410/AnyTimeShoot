import React, {useRef, useState, useCallback} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';
import {ASButton} from './ASButton';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const dynamicImageWidth = viewportWidth * 0.8;

const OnboardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation<RootStackNavigationProp<'onboardSlider'>>();

  const ImagesArray = [
    {
      id: 1,
      uri: images.onBoardBanner,
      text: constant.onBoardTitle1,
      description: constant.onBoardDesc1,
    },
    {
      id: 2,
      uri: images.onBoardBanner2,
      text: constant.onBoardTitle2,
      description: constant.onBoardDesc2,
    },
    {
      id: 3,
      uri: images.onBoardBanner3,
      text: constant.onBoardTitle3,
      description: constant.onBoardDesc3,
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / viewportWidth);
    setActiveIndex(currentIndex);
  };

  const scrollToIndex = useCallback((index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * viewportWidth,
        animated: true,
      });
    }
  }, []);

  const handleNextPress = useCallback(() => {
    if (activeIndex < ImagesArray.length - 1) {
      scrollToIndex(activeIndex + 1);
    } else {
      navigation.navigate('login');
    }
  }, [activeIndex, ImagesArray.length, navigation, scrollToIndex]);

  const moveToSkip = useCallback(() => {
    navigation.navigate('login')
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {activeIndex < ImagesArray.length && (
          <TouchableOpacity style={styles.skipButton} onPress={moveToSkip}>
            <Text style={styles.skipText}>Skip</Text>
            <Image source={images.skipArrow} style={styles.arrowImage} />
          </TouchableOpacity>
        )}
        
        {/* Scrollable Content Area */}
        <View style={styles.scrollContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}>
            {ImagesArray.map((item) => (
              <View key={item.id} style={styles.slide}>
                <View style={styles.imageContainer}>
                  <Image source={item.uri} style={styles.image} resizeMode="contain" />
                </View>
                
                <View style={styles.textContainer}>
                  <Text style={styles.slideText}>{item.text}</Text>
                  <Text style={styles.slideDesc}>{item.description}</Text>
                </View>
                
               
              </View>
            ))}
          </ScrollView>
        </View>
        {/* Fixed Button Area */}
        <View style={styles.buttonContainer}>
        <View style={styles.indicatorContainer}>
              {ImagesArray.map((_, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.indicatorDot,
                    idx === activeIndex ? styles.activeDot : styles.inactiveDot,
                  ]}
                  onPress={() => scrollToIndex(idx)}
                />
              ))}
                </View>
          <ASButton
            onPress={handleNextPress}
            title={activeIndex === ImagesArray.length - 1 ? constant.getStarted : constant.next}
            customStyle={styles.continueButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 24,
    zIndex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: colors.appColor,
    marginRight: 5,
    fontFamily: Fonts.regular,
  },
  slide: {
    width: viewportWidth,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 20,
    
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '60%',
  },
  image: {
    width: dynamicImageWidth,
    height: dynamicImageWidth * 0.9,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 30,
  },
  slideText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    color: colors.black,
    fontFamily: Fonts.semiBold,
    lineHeight: 32,
    // fontWeight: 'bold'
  },
  slideDesc: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.grey,
    fontFamily: Fonts.regular,
    lineHeight: 24,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.appColor,
    width: 24,
  },
  inactiveDot: {
    backgroundColor: colors.indicatorInactive,
  },
  arrowImage: {
    width: 6,
    height: 10,
    tintColor: colors.appColor,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: colors.appColor,
    // width: '100%',
    height: 56,
    borderRadius: 28,
  },
});

export default React.memo(OnboardSlider);