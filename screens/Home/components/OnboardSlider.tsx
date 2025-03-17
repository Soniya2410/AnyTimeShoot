import React, {useRef, useState} from 'react';
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
} from 'react-native';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import {constant} from '../../utils/Constant';

const {width: viewportWidth} = Dimensions.get('window');

const OnboardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

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

  const scrollToIndex = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * viewportWidth,
        animated: true,
      });
    }
  };

  const moveToSkip = () => {
    console.log('Skip pressed');
  };

  return (
    <View style={styles.container}>
      {activeIndex < ImagesArray.length - 1 && (
        <TouchableOpacity style={styles.skipButton} onPress={moveToSkip}>
          <Text style={styles.skipText}>Skip</Text>
          <Image source={images.skipArrow} style={styles.arrowImage}/>
        </TouchableOpacity>
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {ImagesArray.map(item => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.uri} style={styles.image} />
            <Text style={styles.slideText}>{item.text}</Text>
            <Text style={styles.slideDesc}>{item.description}</Text>
            <View style={styles.indicatorContainer}>
              {ImagesArray.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicatorDot,
                    index === activeIndex
                      ? styles.activeDot
                      : styles.inactiveDot,
                  ]}
                  onTouchEnd={() => scrollToIndex(index)}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 40,
    zIndex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: colors.appColor,
    marginRight: 5,
  },
  slide: {
    width: viewportWidth,
    alignItems: 'center',
    paddingTop: 100,
  },
  image: {
    width: 326,
    height: 326,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  slideText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: colors.black,
    top: 35,
  },
  slideDesc: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'regular',
    color: colors.grey,
    top: 50,
    marginRight: 30,
    marginLeft: 30,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    top: 55,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: colors.lightGray,
  },
  activeDot: {
    backgroundColor: colors.appColor,
  },
  inactiveDot: {
    backgroundColor: colors.indicatorInactive,
  },
  arrowImage: {
    width: 6,
    height: 10,
  }
});

export default OnboardSlider;
