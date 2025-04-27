import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {constant} from '../../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';

const OTPSection = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const resendOtp = () => {
    console.log('Resend OTP clicked');
  };

  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.sectionTitle}>OTP</Text>
      <Text style={{marginBottom: 8}}>Share the code to begin shoot.</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={value => handleOtpChange(index, value)}
          />
        ))}
      </View>
      <Text style={{textAlign: 'left', fontSize: 12}}>
        Haven't received code? </Text>
        <Text
          onPress={resendOtp}
          style={{color: colors.appColor, textDecorationLine: 'underline',textAlign: 'left', marginTop: 5,}}>
          {' '}
          Resend Code
       
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: colors.appColor,
    marginHorizontal: 5,
    textAlign: 'center',
    borderRadius: 8,
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
});

export default OTPSection;
