import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import React, {useState} from 'react';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';

const RateAndReviewComponent = ({item}: any) => {
  const [rating, setRating] = useState(0);
  const [maxRating] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{constant.rateAndReview}</Text>
      <View style={styles.ratingContainer}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setRating(item)}>
              <Image
                style={styles.starImage}
                source={
                  item <= rating
                    ? images.filledStar 
                    : images.emptyStar 
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.ratingTextContainer}>
        <Text style={styles.ratingValue}>
          {rating > 0 ? rating.toFixed(1) : '4.7'}
        </Text>
        <Text style={styles.ratingStars}>⭐⭐⭐⭐⭐</Text>
        <Text style={styles.reviewCount}>
          {rating > 0 ? `${rating * 6} reviews` : '29 reviews'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  starImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginHorizontal: 2,
  },
  ratingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    fontSize: 14,
    fontFamily: Fonts.bold, 
    color: colors.black,
    marginRight: 4,
  },
  ratingStars: {
    fontSize: 14,
    marginRight: 4,
  },
  reviewCount: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.black,
  },
});

export default RateAndReviewComponent;