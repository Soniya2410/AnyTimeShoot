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
import {RootStackNavigationProp} from '../../App';
import { ASButton } from './components/ASButton';
import { Fonts } from '../utils/Fonts';

const {width, height} = Dimensions.get('screen');

const SuccessScreen: React.FC = () => {
 const navigation = useNavigation<RootStackNavigationProp<'successScreen'>>();
    
 const navigateToSignInPage = () => {
    navigation.navigate('signIn');
   };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={images.otpSuccessBg} style={styles.bgImage}></Image>
        <Text style={styles.successText}>{constant.success}</Text>
        <Text style={styles.highlighText}>
          {constant.congrats}
          <Text style={styles.youHaveText}>{constant.youhaveBeen}</Text>
        </Text>
         <ASButton onPress={navigateToSignInPage} title={constant.continue} 
        customStyle={styles.continueButton}
        > 
        </ASButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
    top: 20,
    paddingHorizontal: 16,
  },
  bgImage: {
    width: width,
    height: '50%',
  },
  successText: {
    fontSize: 22,
    fontFamily: Fonts.bold,
    color: colors.textPrimary2,
    paddingHorizontal: 8
  },
  highlighText: {
    top: 15,
    color: colors.appColor,
    fontSize: 18,
    fontFamily: Fonts.medium,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  youHaveText: {
    color: colors.placeHolderColor,
    fontSize: 18,
    fontFamily: Fonts.medium,
  },
  continueButton:{
    top: 150,
    borderRadius: 27,
    width: width * 0.8,
    alignSelf: 'center',
  }
});

export default SuccessScreen;
