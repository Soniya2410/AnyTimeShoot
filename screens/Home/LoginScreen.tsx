import React from 'react';
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
import { PVBMButton } from '../utils/PVBMButton';

const {width, height} = Dimensions.get('screen');
const LoginScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'login'>>();

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
            <Text style={styles.phoneNoText}>{constant.enterYourPhoneNo}</Text>
          </View>
          <View style={styles.phoneNoView}>
            <Text style={styles.phoneNoText}>{constant.phoneNumber}</Text>
            <TextInput
              keyboardType="phone-pad"
              maxLength={10}
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
        <View style={{alignItems: "center"}}>
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
    // fontFamily : "Poppins-Medium",
    color: colors.white,
    marginTop: 5,
    fontWeight: 'medium',
  },
  continueAsText: {
    fontSize: 16,
    // fontFamily : "Poppins-Medium",
    color: colors.black,
    marginTop: 5,
    fontWeight: 'medium',
  },
  highlight: {
    color: colors.appColor,
    fontSize: 16,
    // fontFamily: "Poppins-SemiBold",
    fontWeight: 'bold',
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
    height: 67,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightGray,
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
    width: 140,
    backgroundColor: colors.placeHolderColor,
  },
  orText: {
    marginHorizontal: 10,
    color: colors.placeHolderColor,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: "Poppins-bold",
  },
  
});

export default LoginScreen;
