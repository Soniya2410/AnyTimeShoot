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
  Image,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../App';
import {images} from '../../utils/Images';

const AddSamplePackageScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'addSamplePackage'>>();

  const moveToNextScreen = () => {
    navigation.navigate('deliverablePackage');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.addSampleForPackage}</Text>
        <Text style={styles.subTitle}>{constant.provideSample}</Text>

        <View style={styles.thumbView}>
          <View>
            <Text style={styles.title}>{constant.thumbnailImage}</Text>
            <View style={styles.thumbBg}>
              <Image source={images.file} style={styles.image} />
              <Text style={styles.text1}>{constant.chooseAfile}</Text>
              <Text style={styles.text2}>{constant.jpegOrPngFormats}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>{constant.sampleVideo}</Text>
            <View style={styles.thumbBg}>
              <Image source={images.file} style={styles.image} />
              <Text style={styles.text1}>{constant.chooseAfile}</Text>
              <Text style={styles.text2}>{constant.jpegOrPngFormats}</Text>
            </View>
          </View>
        </View>

        <View style={styles.sampleImagesView}>
          <Image source={images.file} style={styles.image} />
          <Text style={styles.sampleImageText1}>{constant.chooseAfile}</Text>
          <Text style={styles.sampleImageText2}>
            {constant.jpegOrPngFormats}
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <ASButton
            title={constant.continue}
            customStyle={styles.btnContinue}
            onPress={moveToNextScreen}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginRight: 16,
    marginLeft: 16,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
    marginRight: 16,
    marginLeft: 16,
    top: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  btnContinue: {
    backgroundColor: colors.appColor,
    margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 15,
  },
  scrollContent: {
    paddingBottom: '100%',
  },
  thumbView: {
    flexDirection: 'row',
    marginTop: 24,
    marginRight: 8,
  },
  image: {
    width: 34,
    height: 34,
  },
  thumbBg: {
    backgroundColor: colors.white,
    borderColor: colors.lineColor,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    height: 119,
    width: 154,
    marginTop: 10,
  },
  text1: {
    fontSize: 8,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  text2: {
    fontSize: 6,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
  },
  sampleImageText1: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  sampleImageText2: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
  },
  sampleImagesView: {
    backgroundColor: colors.white,
    borderColor: colors.lineColor,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 24,
    marginRight: 16,
    marginLeft: 16,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddSamplePackageScreen;
