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
  SafeAreaView,
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
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.title}>{constant.addSampleForPackage}</Text>
        <Text style={styles.subTitle}>{constant.provideSample}</Text>
        <View style={styles.thumbView}>
          <View>
            <Text style={styles.categoryTitle}>{constant.thumbnailImage}</Text>
            <TouchableOpacity style={styles.thumbBg}>
              <Image source={images.file} style={styles.image} />
              <Text style={styles.text1}>{constant.chooseAfile}</Text>
              <Text style={styles.text2}>{constant.jpegOrPngFormats}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.categoryTitle}>{constant.sampleVideo}</Text>
            <TouchableOpacity style={styles.thumbBg}>
              <Image source={images.file} style={styles.image} />
              <Text style={styles.text1}>{constant.chooseAfile}</Text>
              <Text style={styles.text2}>{constant.jpegOrPngFormats}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.categoryTitle2}>{constant.sampleImages}</Text>
        <View style={styles.sampleImagesView}>
          <Image source={images.file} style={styles.image} />
          <Text style={styles.sampleImageText1}>{constant.chooseAfile}</Text>
          <Text style={styles.sampleImageText2}>
            {constant.jpegOrPngFormats}
          </Text>
        </View>
        </View>
        <ASButton
          title={'Upload'}
          customStyle={styles.btnContinue}
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
  viewStyle : {
    marginHorizontal: 16,
    height: '90%'
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    marginVertical: 5

  },
  categoryTitle: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.textPrimary2,
  },
  categoryTitle2: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.textPrimary2,
    marginVertical: 5,
    marginTop: 20
  },
  subTitle: {
    fontFamily: Fonts.light,
    fontSize: 14,
    color: colors.textPrimary2,
   
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
    // margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 15,
  },
  
  thumbView: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 24,
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
    // marginLeft: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    minHeight: 120,
    // width: 154,
    marginTop: 10,
  },
  text1: {
    fontSize: 8,
    fontFamily: Fonts.medium,
    color: colors.appColor,
  },
  text2: {
    fontSize: 8,
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
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
    marginVertical: 10
  },
});

export default AddSamplePackageScreen;
