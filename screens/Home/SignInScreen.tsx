import React, {useState, ReactNode} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  SafeAreaView
} from 'react-native';
import {images} from '../utils/Images';
import {colors} from '../utils/Colors';
import {constant} from '../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';
import {ASButton} from './components/ASButton';
import {Fonts} from '../utils/Fonts';

const {width, height} = Dimensions.get('screen');

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'signIn'>>();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const navigateToGoogle = () => {
  };

  const navigateToHome = () => {
    navigation.navigate('homeScreen')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={images.signInBg} style={styles.bgImage}></Image>
        <View style={styles.baseView}>
          <Text style={styles.titleText}>{constant.loginOrSignup}</Text>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>{constant.userName}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="default"
                selectionColor={colors.appColor}
                style={styles.input}
                value={userName}
                onChangeText={setUserName}
              />
              {userName.length > 3 && (
                <Image
                  source={images.mobileVerifyTick}
                  style={styles.mobileVerifyTick}
                />
              )}
            </View>
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>{constant.enterYourEmail}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="default"
                selectionColor={colors.appColor}
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
              {email.length > 3 && (
                <Image
                  source={images.mobileVerifyTick}
                  style={styles.mobileVerifyTick}
                />
              )}
            </View>
          </View>

             <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line2} />
            </View>

          <TouchableOpacity style={styles.button} onPress={navigateToGoogle}>
            <Image
              source={images.googleIcon}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>{constant.continueWithGoogle}</Text>
          </TouchableOpacity>

          <ASButton title={constant.continue} onPress={navigateToHome} customStyle={styles.continueButton}> 
          </ASButton>

          <TouchableOpacity>
            <Text style={styles.skipForText}>{constant.skipForNow}</Text>
          </TouchableOpacity>
 
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    alignItems: 'center',
  },
  bgImage: {
    width: width,
    height: '25%',
  },
  baseView: {
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 30,
    padding: 20,
    height,
    width,
  },
  titleText: {
    color: colors.appColor,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
  userNameContainer: {
    marginTop: 10,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 8,
    height: 65,
  },
  userNameText: {
    padding: 12,
    color: colors.textPrimary2,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  input: {
    flex: 1,
    padding: 12,
    bottom: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  mobileVerifyTick: {
    height: 20,
    width: 20,
    right: 12,
    position: 'absolute',
    bottom: 27,
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
  line2: {
    flex: 1,
    height: 1,
    backgroundColor: colors.placeHolderColor,
    marginRight: 20,
  },
  orText: {
    marginHorizontal: 10,
    color: colors.placeHolderColor,
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    height: 56,
    borderColor: colors.placeHolderColor,
    borderWidth: 2,
    justifyContent: "center",
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 8,  
},
  buttonText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: Fonts.semiBold,
  },
  continueButton: {
    height: 54,
    borderRadius: 27,
    marginTop: 20,
  },
  skipForText: {
    color: colors.appColor,
    fontSize: 16,
    fontFamily: Fonts.medium,
    textDecorationLine: 'underline',
    textAlign: 'right'
  }
});

export default SignInScreen;
