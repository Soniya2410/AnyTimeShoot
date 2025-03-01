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
    width: '100%', 
    height: 120, 
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    position: 'relative', 
  },
  instantBookingImage: {
    resizeMode: 'cover',
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end', 
    padding: 5,
  },
  topSection: {
    alignItems: 'flex-start',
  },
  instantBookingName: {
    fontSize: 9, 
    fontWeight: 'bold',
    color: 'white',
  },
  underline: {
    height: 1,
    width: '100%',
    backgroundColor: 'yellow', 
    marginTop: 2, 
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5, 
    bottom: 0
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  locationIcon: {
    width: 8,
    height: 8,
    marginRight: 2,
    tintColor: 'white', 
  },
  instantBookingAvailable: {
    fontSize: 8, 
    color: 'white',
    fontWeight: 'bold',
  },
  instantBookingPrice: {
    fontSize: 7, 
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default InstantBookingCard;