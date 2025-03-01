import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../utils/Images';
import React from 'react';
import { colors } from "../../utils/Colors";

const PreweddingCard = React.memo(({item, onLike, cardSize = 250}: any) => {
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
            source={images.verify}
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
            <Text style={styles.ratingText}>({item.rating})</Text>
          </View>
          <Text style={styles.recommendedTitle}>{item.title}</Text>
          <Text style={styles.recommendedDescription}>{item.description}</Text>
        </View>

        {/* <View style={styles.rightSection}>
          <Text style={styles.originalPrice}>{item.price}</Text>
          <Text style={styles.offerPrice}>{item.offerPrice}</Text>
        </View> */}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  starIcon: {
    width: 8,
    height: 8,
    resizeMode: 'contain',
    marginHorizontal: 1,
  },
  recommendedCard: {
    width: '100%', 
    height: 100, 
    // margin: 5,
    // marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
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
    padding: 1,
    flex: 1,
  },
  recommendedTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 1,
  },
  recommendedDescription: {
    fontSize: 10,
    color: colors.white,
    marginBottom: 2,
  },
  recommendedPrice: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 2,
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
  originalPrice: {
    fontSize: 12,
    color: colors.white,
    marginTop: 10,
    textDecorationLine: 'line-through',
  },
  offerPrice: {
    fontSize: 14,
    color: 'yellow',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  ratingText: {
    fontSize: 8,
    color: 'white',
    marginLeft: 5,
  },
  likeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  likeButton: {
    padding: 2,
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
    width: 20,
    height: 20,
    borderRadius: 15,
    marginRight: 10,
  },
});
export default PreweddingCard;
