import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {images} from '../utils/Images';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import {constant} from '../utils/Constant';
import {ASButton} from '../components/ASButton';
import { ReviewItems } from './components/ReviewItems';

const reviews = [
  {
    id: '1',
    name: 'Mark Kenji',
    date: '12 Jun 2024',
    rating: 5,
    review:
      'The app offers a seamless and intuitive user experience with its clean design. Features are well-organized and cater to all needs effectively...',
    avatar: images.profileImage,
  },
  {
    id: '2',
    name: 'Mark Kenji',
    date: '12 Jun 2024',
    rating: 4,
    review:
      'The app offers a seamless and intuitive user experience with its clean design. Features are well-organized and cater to all needs effectively...',
    avatar: images.profileImage,
  },
  {
    id: '3',
    name: 'Mark Kenji',
    date: '12 Jun 2024',
    rating: 4,
    review:
      'The app offers a seamless and intuitive user experience with its clean design. Features are well-organized and cater to all needs effectively...',
    avatar: images.profileImage,
  },
  {
    id: '4',
    name: 'Mark Kenji',
    date: '12 Jun 2024',
    rating: 5,
    review:
      'The app offers a seamless and intuitive user experience with its clean design. Features are well-organized and cater to all needs effectively...',
    avatar: images.profileImage,
  },
];

export default function ReviewsScreen() {
  const moveToBookNow = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.averageRatingText}>{constant.averageRating}</Text>
        <View style={styles.ratingRow}>
          <Image source={images.filledStar} style={styles.starLarge} />
          <Text style={styles.ratingNumber}>{constant.reviewRating}</Text>
        </View>
      </View>

      <View style={styles.line}/>

      <FlatList
        data={reviews}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => 
          <ReviewItems item={item} />
        }
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomBar}>
        <Text style={styles.priceText}>{constant.reviewPrice}</Text>
        <ASButton
          title={constant.bookNow}
          customStyle={styles.bookButton}
          textStyle={styles.bookButtonText}
          onPress={moveToBookNow}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    marginLeft: 16,
  },
  ratingContainer: {
    marginBottom: 16,
  },
  averageRatingText: {
    color: colors.appColor,
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingNumber: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginLeft: 8,
  },
  
  
 
  starLarge: {
    width: 20,
    height: 20,
  },
  
  line: {
    height: 1,
    backgroundColor: colors.lineColor,
    width: '90%',
    alignSelf: 'center', 
    marginVertical: 16, 
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: colors.borderColor,
  },
  priceText: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
    color: colors.appColor,
  },
  bookButton: {
    backgroundColor: colors.appColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
});
