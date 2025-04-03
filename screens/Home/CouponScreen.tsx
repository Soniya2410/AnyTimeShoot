import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { constant } from '../utils/Constant';
import { images } from '../utils/Images';

const coupons = [
  { id: '1', type: '20% Off', amount: '₹1,000', code: 'NEW25', applied: true },
  { id: '2', type: 'Cashback', amount: '₹2,500', code: 'NEW25', applied: true },
  { id: '3', type: 'New Bee', amount: '₹1,000', code: 'NEW25', applied: false },
  { id: '4', type: '20% Off', amount: '₹1,000', code: 'NEW25', applied: false },
];

const CouponScreen = () => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const applyCoupon = (id:any) => {
    setSelectedCoupon(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{constant.applyCoupon}</Text>
      <Text style={styles.cartValue}>{constant.yourCartValue}: ₹2,45,000</Text>

      <TextInput placeholder={constant.enterYourCoupon} style={styles.input} />

      <Text style={styles.bestOffers}>Best offers for you</Text>

      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.couponCard}>
            <View style={[styles.tag, item.type === 'Cashback' && styles.cashbackTag]}>
              <Text style={styles.tagText}>{item.type}</Text>
            </View>
            <View style={styles.couponDetails}>
              <Text style={styles.discountText}>{constant.get} {item.type} {constant.upTo} {item.amount}</Text>
              <Text style={styles.minPurchase}>{constant.get} {item.type} {constant.onBookingDesc}</Text>
              <View style={styles.codeContainer}>
                <Text style={styles.couponCode}>{item.code}</Text>
              </View>
              <View style={styles.separator} />
              {item.applied ? (
                <View style={styles.appliedContainer}>
                  <Image source={images.appliedCouponIcon} style={styles.appliedIcon} />
                  <Text style={styles.appliedText}>{constant.applied}</Text>
                </View>
              ) : (
                <TouchableOpacity style={styles.applyButton} onPress={() => applyCoupon(item.id)}>
                  <Text style={styles.applyText}>{constant.tapToApply}</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  header: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: colors.black,
  },
  cartValue: {
    fontSize: 10,
    fontFamily: Fonts.medium,
    color: colors.black,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.placeHolderColor,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    height: 45,
  },
  bestOffers: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 10,
  },
  couponCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.lineColor,
  },
  tag: {
    backgroundColor: colors.appColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
  cashbackTag: {
    backgroundColor: colors.appColor,
    width: 70,
    alignItems: 'center',
  },
  tagText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
  couponDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  discountText: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
    marginTop: 5,
  },
  minPurchase: {
    fontSize: 10,
    color: colors.appColor,
    marginVertical: 5,
    fontFamily: Fonts.medium,
    textAlign: 'center',
  },
  codeContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: colors.textPrimary2,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  couponCode: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: colors.textPrimary2,
  },
  separator: {
    height: 1,
    backgroundColor: colors.lineColor,
    marginVertical: 5,
    paddingRight: 'auto',
    paddingLeft: "auto",
    width: '100%',
    marginTop: 10,
  },
  appliedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 5,
  },
  appliedIcon: {
    width: 17,
    height: 9,
    marginRight: 5,
  },
  appliedText: {
    color: colors.appliedColor,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
  applyButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  applyText: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
});

export default CouponScreen;
