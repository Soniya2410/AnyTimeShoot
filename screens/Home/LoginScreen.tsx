import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {colors} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';
import {TextInput} from 'react-native-gesture-handler';
import {PVBMButton} from '../utils/PVBMButton';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';

const {width, height} = Dimensions.get('screen');
const LoginScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'login'>>();

  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [country, setCountry] = useState<Country>();
  const [withCountryNameButton, setWithCountryNameButton] =
    useState<boolean>(false);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false);
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const moveToOtpPage = () => {
    // navigation.navigate
  };

  return (
    <View style={styles.container}>
      <Image style={styles.bgImg} source={images.loginCam}></Image>
      <Text style={styles.welcomeText}>
        {constant.welcomeText}
        <Text style={styles.highlight}>{constant.shoot}</Text>
      </Text>
      <View style={styles.baseView}>
        <Text style={styles.loginText}>{constant.loginOrSignup}</Text>
        <View style={styles.childBaseView}>
          <View style={styles.dropDownView}>
            <Text style={styles.phoneNoLabel}>{constant.enterYourPhoneNo}</Text>
            <View style={styles.countrySelectorRow}>
              <TouchableOpacity
                style={styles.countrySelector}
                onPress={() => setWithCountryNameButton(true)}>
                <Text style={styles.countryText}>
                  {country
                    ? `${country.name} (+${country.callingCode[0]})`
                    : 'India (+91)'}
                </Text>
              </TouchableOpacity>
              <Image style={styles.arrowImg} source={images.checkIcon} />
            </View>
            <CountryPicker
              withModal={true}
              withFlag={false}
              withEmoji={false}
              withCountryNameButton={false}
              withAlphaFilter={false}
              withFilter={true}
              withCallingCode={true}
              countryCode={countryCode ?? ''}
              preferredCountries={['IN', 'SG', 'MY']}
              onSelect={country => {
                setCountryCode(country.cca2);
                setCountry(country);
              }}
              visible={withCountryNameButton}
              onClose={() => setWithCountryNameButton(false)}
              renderFlagButton={() => null}
            />
          </View>
          <View style={styles.phoneNoView}>
            <Text style={styles.phoneNoText}>{constant.phoneNumber}</Text>
            <TextInput
              keyboardType="phone-pad"
              maxLength={10}
              selectionColor={colors.appColor}
              style={styles.input}></TextInput>
          </View>
          <Text style={styles.secureText}>{constant.loginSecure}</Text>
          <PVBMButton
            onPress={moveToOtpPage}
            title={constant.continue}
            customStyle={styles.continueButton}></PVBMButton>
        </View>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.continueAsText}>
            {constant.continueAs}
            <Text style={styles.highlight}>{constant.guest}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  bgImg: {
    width: 189,
    height: 176,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    marginTop: 5,
    // fontWeight: 'medium',
  },
  continueAsText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    marginTop: 5,
    // fontWeight: 'medium',
  },
  highlight: {
    color: colors.appColor,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: 'bold',
  },
  baseView: {
    backgroundColor: colors.white,
    marginTop: 20,
    width: width,
    borderRadius: 30,
    padding: 20,
    height: height,
  },
  loginText: {
    color: colors.appColor,
    fontSize: 16,
    fontWeight: 'semibold',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
    paddingRight: 16,
  },
  childBaseView: {
    backgroundColor: colors.white,
    marginRight: 12,
    marginLeft: 12,
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
    fontWeight: 'regular',
    color: colors.black,
    top: 24,
    marginBottom: 20,
  },
  phoneNoText: {
    color: colors.placeHolderColor,
    fontSize: 14,
    fontWeight: 'regular',
    fontFamily: 'Poppins-regular',
    padding: 12,
  },
  input: {
    padding: 12,
    bottom: 10,
  },
  continueButton: {
    height: 54,
    backgroundColor: colors.appColor,
    borderRadius: 50,
    marginTop: 24,
    paddingRight: 16,
    paddingLeft: 16,
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
    fontWeight: 'bold',
    fontFamily: 'Poppins-bold',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 4,
    height: 48,
    marginBottom: 16,
  },
  countryCodeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: colors.lightGray,
  },
  countryCodeText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: 'Poppins-regular',
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    color: colors.black,
    fontSize: 14,
    fontFamily: 'Poppins-regular',
  },
  arrowImg: {
    width: 24,
    height: 24,
    tintColor: colors.placeHolderColor,
    marginLeft: 8,
  },
  dropDownContainer: {
    marginBottom: 16,
  },
  phoneNoLabel: {
    color: colors.placeHolderColor,
    fontSize: 14,
    fontFamily: 'Poppins-regular',
    marginBottom: 8,
  },
  countrySelectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countrySelector: {
    flex: 1,
  },
  countryText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: 'Poppins-regular',
  },
});

export default LoginScreen;
