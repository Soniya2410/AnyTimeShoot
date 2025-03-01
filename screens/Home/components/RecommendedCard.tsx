import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../utils/Images';
import React from 'react';

const RecommendedCard = React.memo(({item, onLike}: any) => {
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
    <View style={styles.recommendedCard}>
      <View style={styles.topSection}>
        <View style={styles.verifyContainer}>
          <Image source={images.verify} style={styles.verifyImage} />
        </View>

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

        <View style={styles.rightSection}>
          <Text style={styles.originalPrice}>{item.price}</Text>
          <Text style={styles.offerPrice}>{item.offerPrice}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  starIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginHorizontal: 2,
  },
  recommendedCard: {
    width: 200,
    height: 300,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  recommendedDescription: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  recommendedPrice: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
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
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  offerPrice: {
    fontSize: 16,
    color: 'yellow',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
    color: 'white',
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
    top: 10,
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
    tintColor: 'red',
  },
});
export default RecommendedCard;
