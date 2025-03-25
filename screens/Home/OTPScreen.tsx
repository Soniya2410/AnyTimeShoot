import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import {images} from '../utils/Images';
import {colors} from '../utils/Colors';
import {constant} from '../utils/Constant';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ASButton } from './components/ASButton';
import { Fonts } from '../utils/Fonts';
import { useNavigation } from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';

const {width, height} = Dimensions.get('screen');

const OTPSCreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'otpScreen'>>();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputs = useRef<TextInput[]>([]);
  
  const navigateToSucessPage = () => {
    navigation.navigate('successScreen');
  };

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    if (index === 3 && text) {
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={images.otpBlankBg} style={styles.bgImg} />
        <View style={styles.baseView}>
          <Text style={styles.verifyText}>{constant.verifyYourPhnNo}</Text>
          <Text style={styles.enterCodeText}>{constant.enterTheCode}</Text>
          
          <View style={styles.otpContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => {if (ref) inputs.current[index] = ref}}
                style={[
                  styles.otpInput,
                  {
                    borderColor: otp[index] ? colors.appColor : colors.otpBorderColor,
                    backgroundColor: otp[index] ? colors.appColor : colors.white,
                  },
                ]}
                keyboardType="numeric"
                maxLength={1}
                placeholder='-'
                value={otp[index]}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                selectTextOnFocus
              />
            ))}
          </View>
          
          <Text style={styles.haventText}>{constant.haventReceiveTheCode}</Text>
          <Text style={styles.resendText}>{constant.resendOtp}</Text>
          <ASButton 
            title='Verify' 
            onPress={navigateToSucessPage} 
            customStyle={styles.continueButton}
          />
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
    fontWeight: '600',
    color: colors.appColor,
    top: 20,
    fontFamily: Fonts.semiBold,
    marginBottom: 20,
  },
  enterCodeText: {
    marginTop: 10,
    fontSize: 15,
    // fontWeight: 'regular',
    fontFamily: Fonts.regular,
    color: colors.black,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  otpInput: {
    width: 64,
    height: 48,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.otpBorderColor,
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: Fonts.bold,
  },
  haventText: {
    paddingHorizontal: 16,
    alignItems:'center',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: 15,
    bottom: 10,
  },
  resendText: {
    alignItems:'center',
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.appColor,
    textDecorationLine:'underline'
  },
  continueButton: {
    height: 54,
    borderRadius: 27,
    top: 34,
  }
});

export default OTPSCreen;