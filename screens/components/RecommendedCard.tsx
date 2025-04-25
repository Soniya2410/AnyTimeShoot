import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../utils/Images';
import React from 'react';
import { colors } from "../utils/Colors";
import { Fonts } from '../utils/Fonts';
import { icons } from '../utils/Icons';

const RecommendedCard = React.memo(({item, onLike, cardSize}: any) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= rating ? images.filledStar : images.emptyStar}
          style={styles.starIcon}
        />,
      );
    }
    return stars;
  };

  return (
    <View style={[styles.recommendedCard, {height: cardSize}]}>
      <View style={styles.topSection}>
          <Image
            source={icons.verifyIcon}
            style={styles.verifyImage}
          />

        <TouchableOpacity
          onPress={() => onLike(item.id)}
          style={styles.likeButton}>
          <Image
            source={item.liked ? images.liked : images.heart}
            style={styles.likeIcon}
          />
        </TouchableOpacity>
      </View>

      <Image source={item.image} style={styles.recommendedImage} />
      <View style={styles.bottomSection}>
        <View style={styles.leftSection}>
          <View style={styles.ratingContainer}>
            {renderStars(item.rating)}
            <Text style={styles.ratingText}>{item.rating}/5</Text>
          </View>
          <Text style={styles.recommendedTitle}>{item.title}</Text>
          <Text style={styles.recommendedDescription}>{item.description}</Text>
        </View>
        { !item.prewedding && (
        <View style={styles.rightSection}>
        <Text style={styles.offerText}>{item.offerText}</Text>
          <Text style={styles.originalPrice}>{item.price}</Text>
          <Text style={styles.offerPrice}>{item.offerPrice}</Text>
        </View>
        )};
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  starIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginHorizontal: 2,
  },
  recommendedCard: {
    width: 200,
    height: 250,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: 'clear',
    overflow: 'hidden',
    position: 'relative',
  },
  recommendedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  recommendedInfo: {
    padding: 10,
    flex: 1,
  },
  recommendedTitle: {
    fontSize: 12,
    color: colors.white,
    marginBottom: 5,
    fontFamily: Fonts.semiBold,
  },
  recommendedDescription: {
    fontSize: 10,
    color: colors.white,
    marginBottom: 10,
    fontFamily: Fonts.regular,
  },
  recommendedPrice: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
    fontFamily: Fonts.regular,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  offerText: {
    fontSize: 12,
    color: colors.white,
    marginTop: 10,
    fontFamily: Fonts.regular,
  },
  originalPrice: {
    fontSize: 12,
    color: colors.white,
    marginTop: 10,
    textDecorationLine: 'line-through',
    fontFamily: Fonts.regular,
  },
  offerPrice: {
    fontSize: 14,
    color: 'yellow',
    fontWeight: 'bold',
    fontFamily: Fonts.bold,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 10,
    color: 'white',
    fontFamily: Fonts.medium,
    marginLeft: 5,
  },
  likeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  likeButton: {
    padding: 5,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  verifyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyImage: {
    width: 24,
    height: 24,
    borderRadius: 15,
    marginRight: 10,
  },
});

export default RecommendedCard;