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
import { Fonts } from '../../utils/Fonts';

const { width: viewportWidth } = Dimensions.get('window');

const PartnerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const slidesArray = [
    {
      id: 1,
      icon: images.offerIcon,
      title: 'Get Paid Faster',
      description: 'Receive your earnings quicker with efficient payout system',
    },
    {
      id: 2,
      icon: images.offerIcon,
      title: 'Flexible Calendar',
      description: 'Be your own boss! Take control of your calendar and choose the dates on which available to take bookings.',
    },
    {
      id: 3,
      icon: images.offerIcon,
      title: 'Instant Booking',
      description: 'Perfect for photographers who enjoy the thrill of last-minute bookings.',
    },
    {
      id: 4,
      icon: images.offerIcon,
      title: 'Effortless Invoicing',
      description: `Don't stress about invoicing! Complete and professional invoice will be generated on behalf of AnyTimesShoot, saving you time and effort`,
    },
    {
      id: 5,
      icon: images.offerIcon,
      title: 'Safety First',
      description: 'Have peace of mind with our 24/7 safety line for photographer support.',
    },

   
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
        {slidesArray.map((item) => (
          <View key={item.id} style={styles.cardSlide}>
            <View style={styles.offerCard}>
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.indicatorContainer}>
        {slidesArray.map((_, index) => (
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
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSlide: {
    width: viewportWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    width: viewportWidth * 0.85, // 85% of screen width
  },
  icon: {
    width: 100,
    height: 50,
    marginBottom: 10,
    tintColor: colors.appColor,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: colors.textPrimary2,
    textAlign: 'center',
    fontFamily: Fonts.light,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  indicatorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
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

export default PartnerSlider;
