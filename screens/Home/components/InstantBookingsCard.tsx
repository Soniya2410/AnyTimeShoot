import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import React from 'react';
import { constant } from '../../utils/Constant';

const InstantBookingCard = ({item}: any) => {
  const isSixthElement = item.id === '6';

  return (
    <View style={styles.instantBookingCard}>
      <Image source={item.image} style={styles.instantBookingImage} />

      {isSixthElement && (
        <View style={styles.dullOverlay}>
          <Image source={images.rightBgArrow} style={styles.rightArrowImage} />
          <Text style={styles.viewAllText}>{constant.view_all}</Text>
        </View>
      )}

      {!isSixthElement && (
        <View style={styles.overlay}>
          <View style={styles.topSection}>
            <Text style={styles.instantBookingName}>{item.service}</Text>
            <View style={styles.underline} />
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.locationContainer}>
              <Image source={images.location} style={styles.locationIcon} />
              <Text style={styles.instantBookingAvailable}>
                {item.available}
              </Text>
            </View>
            <Text style={styles.instantBookingPrice}>{item.price}</Text>
          </View>
        </View>
      )}
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dullOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  rightArrowImage: {
    width: 24, 
    height: 24, 
    tintColor: 'white', 
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
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  underline: {
    height: 1,
    width: '100%',
    backgroundColor: 'yellow',
    marginTop: 5,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    bottom: 0,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  locationIcon: {
    width: 10,
    height: 10,
    tintColor: 'white',
  },
  instantBookingAvailable: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  instantBookingPrice: {
    fontSize: 8,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  viewAllText: {
    color: colors.white,
    fontWeight: '500',
    marginTop: 10,
    fontSize: 12,
  },
});

export default InstantBookingCard;