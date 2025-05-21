import {SafeAreaView, StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../utils/Colors';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';
import { useRef, useState } from 'react';
import { images } from '../../utils/Images';
import { ASButton } from '../../components/ASButton';
const mobileNo = "+91-9889052078";
const email = "abc@gmail.com"

const PartnerOTPVerificationScreen = ({route} : any) => {
  const navigation = useNavigation<RootStackNavigationProp<'partnersOnboarding'>>();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const moveToNextScreen = () => {
    
  }

  const handleChange = (text : any, index : number) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 5) {
        inputs.current[index + 1]?.focus();
      } else if (!text && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleResend = () => {
    // Add resend logic
    console.log('Resend OTP');
  };
  
  const {selectionOption} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={{marginHorizontal: 16, height: '90%'}}>
        <Text style={styles.title}>{constant.getOTP}</Text>
        <Text style={styles.subtitle}>{constant.verifyMsg}{selectionOption == "phone" ? `mobile number : ${mobileNo}` : `email : ${email}`}</Text>
        <View style={styles.progressContainer}>
          {[0, 1, 2, 3, 4].map(index => (
            <View
              key={index}
              style={[
                styles.dot,
                index === 0 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <Text style={styles.stepText}>Step 1 of 5</Text>
        
        {/* Icon */}
        <View style={styles.iconContainer}>
          { selectionOption == 'phone' ? 
          <Image source={images.phoneCode} style={styles.icon}/>
          : 
          <Image source={images.emailCode} style={styles.icon}/>}
        </View>
        <Text style={styles.otpTitle}>Enter 6 Digit OTP:</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el: TextInput | null) => {
                inputs.current[index] = el;
              }}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              returnKeyType="done"
            />
          ))}
        </View>
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn’t Receive OTP?</Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendLink}>RESEND OTP</Text>
          </TouchableOpacity>
        </View>
        </View>
      </KeyboardAvoidingView>
      <ASButton 
        title='Continue'
        onPress={moveToNextScreen}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    color: colors.appColor,
    marginVertical: 14,
    fontFamily: Fonts.medium,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  dot: {
    height: 4,
    borderRadius: 2,
    marginRight: 8,
    flex: 1,
  },
  otpTitle : {
    fontSize: 18,
    color: colors.textPrimary2,
    marginVertical: 14,
    fontFamily: Fonts.medium,
    alignSelf: 'flex-start',
  },
  activeDot: {
    backgroundColor: colors.appColor,
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  stepText: {
    fontSize: 12,
    color: '#888',
    fontFamily: Fonts.regular,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  iconContainer: {
    marginTop: 40,
    marginBottom: 20,
    // alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginBottom: 30,
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  resendContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 12,
  },
  resendText: {
    color: '#aaa',
    marginRight: 4,
    fontFamily: Fonts.regular
  },
  resendLink: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginVertical: 5
  },
  icon : {
    height: 130,
    width: 135
  }
});
export default PartnerOTPVerificationScreen;
