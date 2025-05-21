import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {images} from '../utils/Images';
import {colors} from '../utils/Colors';
import {constant} from '../utils/Constant';
import { ASButton } from '../components/ASButton';
import { Fonts } from '../utils/Fonts';
import { useNavigation } from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from '../../App';
import { RouteProp } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

type OTPScreenRouteProp = RouteProp<RootStackParamList, 'otpScreen'>;

type Props = {
  route: OTPScreenRouteProp;
};

const OTPSCreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<RootStackNavigationProp<'otpScreen'>>();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputs = useRef<TextInput[]>([]);
  const [showInvalidOtp, setShowInvalidOtp] = useState(false);
  const {phoneNumber, countryCode} = route.params;
  console.log('Phone Number:', phoneNumber);
  
  const navigateToSucessPage = () => {
    if(otp.join('').length < 4) {
      setShowInvalidOtp(true);
      return;
    } else {
      setShowInvalidOtp(false);
      navigation.navigate('successScreen');
    }
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

  const clearAllPin = () => {
    const newOtp = ['', '', '', ''];
    setOtp(newOtp);
    inputs.current[0]?.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
        <Image source={images.otpFilledBg} style={styles.bgImg} />
        <ScrollView
    contentContainerStyle={styles.scrollContainer}
    keyboardShouldPersistTaps="handled"
  >
        <View style={styles.baseView}>
          <Text style={styles.verifyText}>{constant.verifyYourPhnNo}</Text>
          <Text style={styles.enterCodeText}>{`${constant.enterTheCode} +${countryCode+phoneNumber}`}</Text>
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
                placeholderTextColor={colors.placeHolderColor}
                selectionColor={colors.appColor}
                value={otp[index]}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                selectTextOnFocus
              />
            ))}
          </View>
          
          <Text style={styles.haventText}>{constant.haventReceiveTheCode}</Text>
          <Text style={styles.resendText}>{constant.resendOtp}</Text>
          {showInvalidOtp && (
            <View>
            <View style={styles.validOtpView}>
              <Text style={styles.invalidOtpText}>{constant.invalidOtpEntered}</Text>
            </View>
             <TouchableOpacity onPress={clearAllPin}>
             <Text style={styles.clearAllText}>{constant.clearAll}</Text>
             </TouchableOpacity>
             </View>
             )}
             <View style={styles.bottomButtonContainer}>
              <ASButton 
                title={constant.verify}
                onPress={navigateToSucessPage} 
                customStyle={styles.continueButton}
              />
              </View>
        </View>
        </ScrollView>
      {/* </View> */}
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },  
  bgImg: {
    width: 300,
    height: '30%',
  },
  baseView: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 30,
    width: width,
    borderRadius: 20,
    padding: 20,
    height: height,
    // justifyContent: 'space-between', 
  },
  verifyText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.appColor,
    marginVertical: 10,
    fontFamily: Fonts.semiBold,
    // marginBottom: 20,
  },
  enterCodeText: {
    marginTop: 5,
    fontSize: 15,
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
    marginBottom: 10,
  },
  resendText: {
    alignItems:'center',
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.appColor,
    textDecorationLine:'underline',
  },
  continueButton: {
    height: 54,
    borderRadius: 27,

  },
  validOtpView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: colors.appLightColor,
    borderRadius: 18,
  },
  invalidOtpText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: colors.appColor,
  },
  clearAllText: {
    marginTop: 5,
    textAlign: "right",
    textDecorationLine: 'underline',
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: colors.appColor
  },
  bottomButtonContainer: {
    padding: 16,
    backgroundColor: colors.white,
    // borderTopWidth: 1,
    // borderTopColor: '#eee',
  },
});

export default OTPSCreen;