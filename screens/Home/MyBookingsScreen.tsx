import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { images } from '../utils/Images';
import CustomSlider from './components/CustomSlider';
import { constant } from '../utils/Constant';

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
    icon: icons.upcoming
  },
  { 
    id: '2', 
    title: constant.completedBookings, 
    description: constant.completedDes,
    action: constant.viewAll,
    icon: icons.completed
  },
  { 
    id: '3', 
    title: constant.cancelledBookings, 
    description: constant.cancelledDes,
    action: constant.viewAll,
    icon: icons.cancelled
  },
];

const MyBookingsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomSlider />
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.bookingCard}>
            <View style={styles.topLine}>
              <Image source={item.icon} style={styles.icon} />
              <View style={styles.spacer} />
              <TouchableOpacity>
                <Text style={styles.viewAllText}>{item.action}</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descText}>{item.description}</Text>
            </View>
          </View>
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
