import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  TextInput,
  Alert
} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import {useNavigation} from '@react-navigation/native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {colors} from '../utils/Colors';
import {RootStackNavigationProp} from '../../App';
import {ASButton} from './components/ASButton';
import {Fonts} from '../utils/Fonts';
import { ASTextInput } from './components/ASTextInput';

const {width, height} = Dimensions.get('screen');

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'login'>>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [country, setCountry] = useState<Country>();
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const onSelectCountry = useCallback((country: Country) => {
    console.log('Loginscreen country code', country.callingCode[0]);
    setCountryCode(country.cca2);
    setCountry(country);
    setShowCountryPicker(false);
  }, []);

  const moveToOtpPage = () => {
    if(phoneNumber.length < 10) {
      Alert.alert('Please enter a valid phone number');
      return;
    } else {
      navigation.navigate('otpScreen',{phoneNumber: phoneNumber, countryCode : country?.callingCode[0]?? ''});
    }
  };

  const handleSetPhoneNumber = (val: string) => {
    console.log('Updating state in parent:', val);
    setPhoneNumber(val);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.loginCam} style={styles.bgImg} />

      <Text style={styles.welcomeText}>
        {constant.welcomeText}
        <Text style={styles.highlight}>{constant.shoot}</Text>
      </Text>

      <View style={styles.baseView}>
        <Text style={styles.loginText}>{constant.loginOrSignup}</Text>

        <View style={styles.childBaseView}>
          {/* Country Selection */}
          <View style={styles.dropDownView}>
            <Text style={styles.phoneNoLabel}>{constant.enterYourPhoneNo}</Text>
            <TouchableOpacity
              style={styles.countrySelectorRow}
              onPress={() => setShowCountryPicker(true)}>
              <Text style={styles.countryText}>
                {country
                  ? `${country.name} (+${country.callingCode[0]})`
                  : 'India (+91)'}
              </Text>
              <Image source={images.checkIcon} style={styles.arrowImg} />
            </TouchableOpacity>

            <CountryPicker
              withModal
              withFlag={true}
              withEmoji={false}
              withFilter
              withCallingCode
              countryCode={countryCode}
              preferredCountries={['IN', 'SG', 'MY']}
              onSelect={onSelectCountry}
              visible={showCountryPicker}
              onClose={() => setShowCountryPicker(false)}
              renderFlagButton={() => null}
            />
          </View>
          {/* Phone Number Input */}
          <ASTextInput 
            keyboardType="phone-pad"
            inputValue={phoneNumber}
            setInputValue={handleSetPhoneNumber}
            placeholder={constant.phoneNumber}
            />

          {/* <View style={styles.phoneNoView}>
          <View style={[styles.inputContainer, { width: phoneNumber.length < 10 ? '95%' : '90%'}]}>
            <Text style={styles.phoneNoText}>{constant.phoneNumber}</Text>
              <TextInput
                keyboardType="phone-pad"
                maxLength={10}
                selectionColor={colors.appColor}
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            {phoneNumber.length === 10 && (
                <Image
                  source={images.mobileVerifyTick}
                  style={styles.mobileVerifyTick}
                />
              )}
          </View> */}
          <Text style={styles.secureText}>{constant.loginSecure}</Text>

          <ASButton
            onPress={moveToOtpPage}
            title={constant.continue}
            customStyle={styles.continueButton}
          />
        </View>

        {/* Divider */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line2} />
        </View>

        <TouchableOpacity
          style={styles.guestContainer}
          onPress={() => navigation.navigate('homeScreen')}>
          <Text style={styles.continueAsText}>
            {constant.continueAs}
            <Text style={styles.highlight}>{constant.guest}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Optimized styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  bgImg: {
    width: 189,
    height: 176,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: colors.white,
    marginTop: 5,
  },
  continueAsText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.black,
    marginTop: 5,
  },
  highlight: {
    color: colors.appColor,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
  baseView: {
    backgroundColor: colors.white,
    marginTop: 20,
    width,
    borderRadius: 30,
    padding: 20,
    height,
  },
  loginText: {
    color: colors.appColor,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    marginTop: 20,
    paddingRight: 16,
  },
  childBaseView: {
    backgroundColor: colors.white,
    // marginHorizontal: 12,
    marginTop: 24,
    // width: 342,
    // height: 236,
    // marginBottom: 24,
  },
  dropDownView: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 4,
    padding: 5,
  },
  
  secureText: {
    fontSize: 12,
    color: colors.black,
    fontFamily: Fonts.regular,
    marginVertical: 20,
  },
  phoneNoText: {
    color: colors.placeHolderColor,
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginTop: 15,
    // backgroundColor: 'red'
  },
  input: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: colors.black,
    marginBottom: 5

  },
  continueButton: {
    height: 54,
    backgroundColor: colors.appColor,
    borderRadius: 50,
    marginTop: 24,
    paddingHorizontal: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.placeHolderColor,
    marginLeft: 20,
  },
  line2: {
    flex: 1,
    height: 1,
    backgroundColor: colors.placeHolderColor,
    marginRight: 20,
  },
  orText: {
    marginHorizontal: 5,
    color: colors.placeHolderColor,
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
  arrowImg: {
    width: 24,
    height: 24,
    tintColor: colors.placeHolderColor,
    marginLeft: 8,
  },
  phoneNoLabel: {
    color: colors.placeHolderColor,
    fontSize: 12,
    fontFamily: Fonts.regular,
    // marginBottom: 8,
  },
  countrySelectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: Fonts.regular,
    width: '90%',
    marginTop: 5
  },
  mobileVerifyTick: {
    height: 20,
    width: 20,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  inputContainer: {
    width: '90%',
  },
  guestContainer: {
    alignItems: 'center',
  },
});

export default React.memo(LoginScreen);
