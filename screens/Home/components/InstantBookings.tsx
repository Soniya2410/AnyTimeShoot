import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import React from 'react';

const InstantBookingCard = ({item}: any) => {
  return (
    <View style={styles.instantBookingCard}>
      <Image source={item.image} style={styles.instantBookingImage} />
      <View style={styles.overlay}>
        <View style={styles.topSection}>
          <Text style={styles.instantBookingName}>{item.service}</Text>
          <View style={styles.underline} />
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.locationContainer}>
            <Image source={images.location} style={styles.locationIcon} />
            <Text style={styles.instantBookingAvailable}>{item.available}</Text>
          </View>
          <Text style={styles.instantBookingPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  instantBookingCard: {
    width: 180, 
    height: 200, 
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    position: 'relative', 
  },
  instantBookingImage: {
    width: '100%',
    height: '100%', 
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between', 
    padding: 10,
  },
  topSection: {
    alignItems: 'flex-start',
  },
  instantBookingName: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: 'white',
  },
  underline: {
    height: 2,
    width: '100%',
    backgroundColor: 'yellow', 
    marginTop: 5, 
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10, 
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: 'white', 
  },
  instantBookingAvailable: {
    fontSize: 14, 
    color: 'white',
    fontWeight: 'bold',
  },
  instantBookingPrice: {
    fontSize: 16, 
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InstantBookingCard;