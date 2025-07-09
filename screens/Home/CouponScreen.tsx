import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import { colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { constant } from '../utils/Constant';
import { images } from '../utils/Images';
import { icons } from '../utils/Icons';
import CouponSuccessModal from './components/CouponSuccessModal';

const coupons = [
  { id: '1', type: '10% Off', amount: '₹1,000', code: 'SOMETHINGNEW25' },
  { id: '2', type: 'Cashback', amount: '₹2,500', code: 'SOMETHINGNEW25' },
  { id: '3', type: 'New Bee', amount: '₹1,000', code: 'SOMETHINGNEW25' },
  { id: '4', type: '20% Off', amount: '₹1,000', code: 'SOMETHINGNEW25' },
];

const CouponScreen = () => {
  const [inputCouponCode, setInputCouponCode] = useState('');
  const [appliedCoupons, setAppliedCoupons] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const applyCoupon = useCallback((id: string) => {
    setAppliedCoupons(prev => [...prev, id]);
    setModalVisible(true);
  }, []);

  const removeCoupon = useCallback((id: string) => {
    setAppliedCoupons(prev => prev.filter(couponId => couponId !== id));
  }, []);

  const renderItem = useCallback(({ item }: { item: typeof coupons[0] }) => {
    const isApplied = appliedCoupons.includes(item.id);

    return (
      <View style={styles.couponCard}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.type}</Text>
        </View>

        <View style={styles.couponDetails}>
          <Text style={styles.discountText}>
            {constant.get} {item.type} {constant.upTo} {item.amount}
          </Text>
          <Text style={styles.minPurchase}>
            {constant.get} {item.type} {constant.onBookingDesc}
          </Text>

          <View style={styles.codeContainer}>
            <Text style={styles.couponCode}>{item.code}</Text>
          </View>

          <View style={styles.applyBtnContainer}>
            {isApplied ? (
              <TouchableOpacity
                style={styles.appliedContainer}
                onPress={() => removeCoupon(item.id)}>
                <Image source={images.appliedCouponIcon} style={styles.appliedIcon} />
                <Text style={styles.appliedText}>{constant.applied}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => applyCoupon(item.id)}>
                <Text style={styles.applyText}>{constant.tapToApply}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }, [appliedCoupons, applyCoupon, removeCoupon]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{constant.applyCoupon}</Text>
      <Text style={styles.cartValue}>
        {constant.yourCartValue}: ₹2,45,000
      </Text>

      <View style={styles.couponCodeInputContainer}>
        <TextInput
          placeholder="Enter Coupon Code"
          placeholderTextColor={colors.placeHolderColor}
          style={styles.input}
          value={inputCouponCode}
          onChangeText={setInputCouponCode}
        />
        <TouchableOpacity>
          <Text
            style={[
              styles.inputApplyText,
              inputCouponCode !== '' && { color: colors.appColor },
            ]}>
            APPLY
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.bestOffers}>Best offers for you</Text>

      <FlatList
        data={coupons}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Modal */}
      <CouponSuccessModal visible={modalVisible} onClose={() => setModalVisible(false)} />
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
  couponCodeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 5,
    paddingRight: 10,
    // marginBottom: 16,
  },
  input: {
    flex: 1,
    color: colors.black,
    padding: 10,
    fontFamily: Fonts.regular
  },
  inputApplyText: {
    color: '#D4D4D4',
    fontSize: 12,
    fontFamily: Fonts.regular
  },
  bestOffers: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: colors.appColor,
    marginVertical: 10,
  },
  couponCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: colors.lineColor,
  },
  tag: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: colors.appColor,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  tagText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    transform: [{ rotate: '-90deg' }],
    width: 100,
    textAlign: 'center',
  },
  couponDetails: {
    flex: 1,
  },
  discountText: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
    marginTop: 5,
    paddingLeft: 10,
  },
  minPurchase: {
    fontSize: 10,
    color: colors.appColor,
    marginVertical: 5,
    fontFamily: Fonts.medium,
    paddingLeft: 10,
  },
  codeContainer: {
    borderWidth: 1,
    borderColor: colors.textPrimary2,
    borderRadius: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginLeft: 10,
  },
  couponCode: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: colors.textPrimary2,
  },
  applyBtnContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: colors.lineColor,
  },
  appliedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
  },
  applyText: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCard: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
  },
  closeBtnContainer: {
    alignSelf: 'flex-start',
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  couponSuccess: {
    width: 280,
    height: 220,
    alignSelf: 'center',
    marginBottom: 20,
  },
  successMsgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successMsg: {
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  continueBtnContainer: {
    backgroundColor: colors.appColor,
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  continueText: {
    color: 'white',
    fontFamily: Fonts.semiBold,
    fontSize: 18
  },
});

export default CouponScreen;