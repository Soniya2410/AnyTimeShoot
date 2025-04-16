import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {ASButton} from './components/ASButton';
import {RootStackNavigationProp} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import CustomSlider from './components/CustomSlider';

const {width, height} = Dimensions.get('screen');

const bookingDetails = [
  {
    id: '1',
    images: images.wedding,
    title: 'Studio Experts',
    subTitle: 'Maternity Shoot',
    rating: 4,
  },
  {
    id: '2',
    images: images.wedding,
    title: 'Studio Experts',
    subTitle: 'Maternity Shoot',
    rating: 4,
  },
  {
    id: '3',
    images: images.wedding,
    title: 'Studio Experts',
    subTitle: 'Maternity Shoot',
    rating: 4,
  },
];

const BookingListScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'bookingList'>>();
  
  const moveToDetailPage = () => {
    navigation.navigate('bookingDetails');
  }

  const renderStars = (count: number) => {
    return [...Array(5)].map((_, i) => (
      <Text key={i} style={styles.star}>
        {i < count ? '★' : '☆'}
      </Text>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomSlider />
      <FlatList
        data={bookingDetails}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <TouchableOpacity onPress={moveToDetailPage}>
          <View style={styles.card}>
            <Image source={item.images} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subTitle}</Text>
              <View style={styles.ratingContainer}>
                <View style={styles.starsContainer}>
                  {renderStars(item.rating)}
                  <Text style={styles.ratingText}> {item.rating}/5</Text>
                </View>
                <Image style={styles.rightArrow} source={images.skipArrow} />
              </View>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContainer: {
    padding: 16,
    marginTop: 22,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    borderColor: colors.borderColor,
    borderWidth: 1,
    height: 120,
  },
  cardImage: {
    width: 100,
    height: '100%',
    borderRadius: 5,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
    marginTop: 5,
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingTop: 0,
    width: '60%',
  },
  cardTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.appColor,
    marginTop: 0,
    marginBottom: 0,
  },
  cardSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
    marginVertical: 4,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  star: {
    color: colors.starColor,
    fontSize: 14,
    textAlign: 'center',
  },
  ratingText: {
    marginLeft: 4,
    color: colors.textPrimary2,
  },
  rightArrow: {
    width: 6,
    height: 10,
    tintColor: colors.appColor,
    marginRight: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BookingListScreen;
