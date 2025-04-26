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
import {ASButton} from '../components/ASButton';
import {RootStackNavigationProp} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import CustomSlider from '../components/CustomSlider';
import { icons } from '../utils/Icons';
import { BookingListItem } from './component/BookingListItem';

const {width, height} = Dimensions.get('screen');

const bookingDetails = [
  {
    id: '1',
    image: images.wedding,
    title: 'Studio Experts',
    description: 'Maternity Shoot',
    rating: 4,
  },
  {
    id: '2',
    image: images.wedding,
    title: 'Studio Experts',
    description: 'Maternity Shoot',
    rating: 4,
  },
  {
    id: '3',
    image: images.wedding,
    title: 'Studio Experts',
    description: 'Maternity Shoot',
    rating: 4,
  },
];

const BookingListScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'bookingList'>>();
  
  const moveToDetailPage = () => {
    navigation.navigate('upcomingbookingDetails');
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomSlider />
      <FlatList
        data={bookingDetails}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => <BookingListItem onPress={moveToDetailPage} item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10
  },
  listContainer: {
    padding: 16,
    marginTop: 22,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    // padding: 10,
    marginBottom: 12,
    borderColor: colors.borderColor,
    borderWidth: 1,
    // height: 120,
  },
  cardImage: {
    width: '30%',
    height: '100%',
    borderRadius: 5,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
    marginTop: 5,
    justifyContent: 'space-between',
    paddingVertical: 8,
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
    width: 8,
    height: 15,
    marginRight: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BookingListScreen;
