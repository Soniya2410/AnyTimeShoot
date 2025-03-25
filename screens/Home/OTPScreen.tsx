import React, {useState, ReactNode} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {images} from '../utils/Images';
import {colors} from '../utils/Colors';
import {constant} from '../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OtpInput} from 'react-native-otp-entry';
import { PVBMButton } from '../utils/PVBMButton';

const {width, height} = Dimensions.get('screen');

const OTPSCreen: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
 
  const navigateToSucessPage = () => {

  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={images.otpBlankBg} style={styles.bgImg} />
        <View style={styles.baseView}>
          <Text style={styles.verifyText}>{constant.verifyYourPhnNo}</Text>
          <Text style={styles.enterCodeText}>{constant.enterTheCode}</Text>
          <View style={styles.otpContainer}>
            <OtpInput
              numberOfDigits={4}
              focusColor={colors.appColor}
              secureTextEntry={false}
              blurOnFilled={true}
              disabled={false}
              type="numeric"
              onTextChange={(text: string) => setOtp(text)}
              placeholder='-'
              theme={{
                containerStyle: {
                  flex: 1,
                  width: '100%',
                  backgroundColor: colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 16,
                },
                pinCodeContainerStyle: {
                  width: 64,
                  height: 48,
                  borderWidth: 1,
                  // borderColor: colors.otpBorderColor, 
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  marginVertical: 10,
                  // backgroundColor: colors.white,
                  borderColor: otp.length > 0 ? colors.appColor : colors.otpBorderColor,
                  backgroundColor: otp.length > 0 ? colors.appColor : colors.white,
                },
                pinCodeTextStyle: {
                  fontSize: 20,
                  color: colors.white,
                  fontWeight: "bold",
                  fontFamily: "Poppins-bold"
                },
              }}
            />
          </View>
          <Text style={styles.haventText}>{constant.haventReceiveTheCode}</Text>
          <Text style={styles.resendText}>{constant.resendOtp}</Text>
          <PVBMButton title='Verify' onPress={navigateToSucessPage} customStyle={styles.continueButton}>

          </PVBMButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  bgImg: {
    width: 161,
    height: 190,
  },
  baseView: {
    backgroundColor: colors.white,
    marginTop: 30,
    width: width,
    borderRadius: 20,
    padding: 20,
    height: height,
  },
  verifyText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: colors.appColor,
    // fontFamily: 'Poppins-semibold'
    top: 20,
    marginBottom: 20,
  },
  enterCodeText: {
    top: 20,
    fontSize: 15,
    fontWeight: 'regular',
    fontFamily: 'Poppins-regular',
    color: colors.black,
  },
  otpContainer: {
    height: 100,
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    alignSelf: "center",
    width: width,
  },
  containerStyle: {
    flex: 1,
    width: '100%',
    backgroundColor: 'clear',
  },
  haventText: {
    padding: 16,
    alignItems:'center',
    textAlign: 'center',
    fontWeight: 'regular',
    fontSize: 15,
    bottom: 10,
  },
  resendText: {
    alignItems:'center',
    textAlign: 'center',
    fontWeight: 'medium',
    fontSize: 14,
    color: colors.appColor,
    // fontFamily
  },
  continueButton: {
   height: 54,
   backgroundColor: colors.appColor,
   borderRadius: 27,
   top: 34,
  }
});

export default OTPSCreen;
