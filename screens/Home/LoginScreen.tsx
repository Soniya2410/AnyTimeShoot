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
} from 'react-native';
import CountryPicker, {Country, CountryCode} from 'react-native-country-picker-modal';
import {useNavigation} from '@react-navigation/native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {colors} from '../utils/Colors';
import {RootStackNavigationProp} from '../../App';
import {ASButton} from './components/ASButton';
import {Fonts} from '../utils/Fonts';

const {width, height} = Dimensions.get('screen');

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'login'>>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [country, setCountry] = useState<Country>();
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const onSelectCountry = useCallback((country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setShowCountryPicker(false);
  }, []);

  const moveToOtpPage = useCallback(() => {
    navigation.navigate('otpScreen');
  }, [navigation]);

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
                {country ? `${country.name} (+${country.callingCode[0]})` : 'India (+91)'}
              </Text>
              <Image source={images.checkIcon} style={styles.arrowImg} />
            </TouchableOpacity>
            
            <CountryPicker
              withModal
              withFlag={false}
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
          <View style={styles.phoneNoView}>
            <Text style={styles.phoneNoText}>{constant.phoneNumber}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="phone-pad"
                maxLength={10}
                selectionColor={colors.appColor}
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              {phoneNumber.length === 10 && (
                <Image 
                  source={images.mobileVerifyTick} 
                  style={styles.mobileVerifyTick} 
                />
              )}
            </View>
          </View>

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
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.guestContainer} onPress={()=> navigation.navigate('homeScreen')}>
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
    fontSize: 12,
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
    marginHorizontal: 12,
    marginTop: 24,
    width: 342,
    height: 236,
    marginBottom: 24,
  },
  dropDownView: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 4,
    padding: 12,
    marginBottom: 0,
  },
  phoneNoView: {
    height: 67,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.black,
  },
  secureText: {
    fontSize: 12,
    color: colors.black,
    fontFamily: Fonts.regular,
    top: 24,
    marginBottom: 20,
  },
  phoneNoText: {
    color: colors.placeHolderColor,
    fontSize: 14,
    fontFamily: Fonts.regular,
    padding: 12,
  },
  input: {
    flex: 1,
    padding: 12,
    bottom: 14,
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
    marginHorizontal: 20,
  },
  orText: {
    marginHorizontal: 10,
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
    marginBottom: 8,
  },
  countrySelectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  mobileVerifyTick: {
    height: 20,
    width: 20,
    right: 12,
    position: 'absolute',
    bottom: 27,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  guestContainer: {
    alignItems: 'center',
  },
});

export default React.memo(LoginScreen);