import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { images } from '../utils/Images';
import CustomSlider from '../components/CustomSlider';
import { constant } from '../utils/Constant';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../App';
import MyBookingListItem from './components/MyBookingItems';

const icons = {
  upcoming: images.upcomingBooking,
  completed: images.completedBooking,
  cancelled: images.cancelBooking,
};

const bookings = [
  { 
    id: '1', 
    title: constant.upcomingBookings, 
    description: constant.upcomingDes,
    action: constant.viewAll,
    icon: icons.upcoming,
    types: 'Upcoming'
  },
  { 
    id: '2', 
    title: constant.completedBookings, 
    description: constant.completedDes,
    action: constant.viewAll,
    icon: icons.completed,
    types: 'Complete'
  },
  { 
    id: '3', 
    title: constant.cancelledBookings, 
    description: constant.cancelledDes,
    action: constant.viewAll,
    icon: icons.cancelled,
    types:'Cancel'
  },
];

const MyBookingsScreen: React.FC = () => {
    const navigation = useNavigation<RootStackNavigationProp<'successScreen'>>();
  
    const navigateToDetailListScreen = (item : unknown) => {
      console.log('click', item)
      navigation.navigate('bookingList', { item : item});
    }
  return (
    <SafeAreaView style={styles.container}>
      <CustomSlider/>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
         <MyBookingListItem 
            onPress={() => navigateToDetailListScreen(item)} 
            item={item}
         />
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
    marginTop: 21,
  },
  bookingCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.lineColor,
  },
  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  spacer: {
    flex: 1,
  },
  viewAllText: {
    fontFamily: Fonts.regular,
    fontSize: 10,
    color: colors.appColor,
    textDecorationLine: 'underline',
  },
  textContainer: {
  },
  titleText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.appColor,
    marginBottom: 4,
  },
  descText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.textPrimary2,
  },
});

export default MyBookingsScreen;
