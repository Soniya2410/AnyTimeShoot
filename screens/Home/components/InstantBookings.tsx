import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import React from 'react';

const InstantBookingCard = ({item}: any) => {
  return (
    <View style={styles.instantBookingCard}>
      <Image source={item.image} style={styles.instantBookingImage} />
      <View style={styles.instantBookingInfo}>
        <Text style={styles.instantBookingName}>{item.name}</Text>
        <Text style={styles.instantBookingService}>{item.service}</Text>
        <View style={styles.instantBookingDetails}>
          <Text style={styles.instantBookingRating}>⭐ {item.rating}</Text>
          <Text style={styles.instantBookingPrice}>{item.price}</Text>
        </View>
        <Text style={styles.instantBookingAvailable}>{item.available}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  instantBookingCard: {
    width: 200,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },
  instantBookingImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  instantBookingInfo: {
    padding: 10,
  },
  instantBookingName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.appColor,
  },
  instantBookingService: {
    fontSize: 14,
    color: 'black',
    marginVertical: 5,
  },
  instantBookingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  instantBookingRating: {
    fontSize: 14,
    color: 'black',
  },
  instantBookingPrice: {
    fontSize: 14,
    color: colors.appColor,
    fontWeight: 'bold',
  },
  instantBookingAvailable: {
    fontSize: 12,
    color: colors.appColor,
    fontWeight: 'bold',
  },
});

export default InstantBookingCard;
