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
} from 'react-native';
import { images } from '../../utils/Images';
import { colors } from '../../utils/Colors';

const { width: viewportWidth } = Dimensions.get('window');

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const ImagesArray = [
    { id: 1, uri: images.wedding },
    { id: 2, uri: images.maternity },
    { id: 3, uri: images.preWedding },
    { id: 4, uri: images.maternity },
    { id: 5, uri: images.product },
    { id: 6, uri: images.preWedding },
  ];

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
    <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  slide: {
    width: viewportWidth,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -25,
    marginTop: 10, 
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
    backgroundColor: colors.lightGray,
  },
});

export default CustomSlider;