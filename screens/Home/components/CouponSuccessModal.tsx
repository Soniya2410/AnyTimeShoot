import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { images } from '../../utils/Images';
import { icons } from '../../utils/Icons';
import { colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const CouponSuccessModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Image source={icons.closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>

          <Image source={images.couponSuccess} style={styles.image} />

          <View style={styles.messageRow}>
            <Text style={styles.message}>Your Coupon applied, </Text>
            <Text style={[styles.message, { color: colors.appColor }]}>Successfully </Text>
            <Text style={styles.message}>!!!!</Text>
          </View>

          <TouchableOpacity style={styles.continueBtn} onPress={onClose}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CouponSuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeBtn: {
    alignSelf: 'flex-start',
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  image: {
    width: 280,
    height: 220,
    marginBottom: 20,
  },
  messageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    textAlign: 'center',
  },
  continueBtn: {
    backgroundColor: colors.appColor,
    padding: 15,
    borderRadius: 50,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  continueText: {
    color: colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: 18,
  },
});
