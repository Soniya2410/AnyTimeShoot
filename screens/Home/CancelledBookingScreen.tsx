import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {ASButton} from './components/ASButton';
import {RootStackNavigationProp} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import BookingDetailSlider from './components/BookingDetailSlider';

const {width, height} = Dimensions.get('screen');

const CancelledBookingScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'cancelledScreen'>>();

  const moveToBookingNow = () => {
    navigation.navigate('noBookingScreen');
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <BookingDetailSlider />
        <View style={styles.cancelView}>
          <View style={styles.textInsideView}>
            <Text style={styles.cancelledText}>{constant.cancelled}</Text>
            <Text style={styles.canReasonText}>{constant.cancelReason}</Text>
          </View>
        </View>
      </View>
      <ASButton
        title={constant.bookingNow}
        customStyle={styles.bookNowBtn}
        onPress={moveToBookingNow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bookNowBtn: {
    height: 54,
    bottom: 60,
  },
  cancelView: {
    height: 58,
    borderColor: colors.appColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    top: 20,
  },
  cancelledText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    textAlign: 'left',
  },
  canReasonText: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: colors.otpBorderColor,
    textAlign: 'left',
  },
  textInsideView: {},
});

export default CancelledBookingScreen;
