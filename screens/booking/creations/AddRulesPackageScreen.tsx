import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';
import RNPickerSelect from 'react-native-picker-select';

const AddRulesPackageScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'addRulesPackage'>>();

  const moveToNextScreen = () => {};

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.paddingView}>
            <Text style={styles.title}>{constant.addRules}</Text>
            <Text style={styles.subTitle}>{constant.addAnyExtra}</Text>
          </View>
          <View style={styles.paddingView}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    top: 10,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
    top: 10,
  },
  paddingView: {
    marginHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: '70%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  continueButton: {
    backgroundColor: colors.appColor,
    margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    paddingHorizontal: 16,
  },
});

export default AddRulesPackageScreen;
