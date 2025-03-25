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
import {ASButton} from './components/ASButton';

const {width, height} = Dimensions.get('screen');

const SignInScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
      <Image source={images.signInBg} style={styles.bgImage}></Image>
      <View style={styles.baseView}>

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
    top: 20,
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
  }
});

export default SignInScreen;
