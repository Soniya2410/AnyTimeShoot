import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {images} from '../../utils/Images';
import {constant} from '../../utils/Constant';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import { RootStackNavigationProp } from '../../../App';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const SuccessPopupCreationScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'successCreation'>>();
  
  const moveToContinue = () => {
   navigation.navigate('gearAndSoftware');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.confetti} style={styles.backgroundImage} />
          <Image
            source={images.successCreation}
            style={styles.foregroundImage}
          />
        </View>

        <Text style={styles.infoText}>
          {constant.thankYouForYourPackage}
          <Text style={styles.brandText}>{constant.anyTimeShoot}</Text>
        </Text>
      </ScrollView>

      {/* <View style={styles.bottomBar}> */}
        <ASButton
          title={constant.continue}
          customStyle={styles.continueBtn}
          onPress={moveToContinue}
        />
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    paddingTop: 40,
  },
  infoText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
    textAlign: 'center',
    lineHeight: 24,
    marginLeft: 37,
    marginRight: 37,
  },
  brandText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
  },
  bottomBar: {
   paddingBottom: 20
  },
  continueBtn: {
    backgroundColor: colors.appColor,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
  },
  imageContainer: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 90,
  },

  backgroundImage: {
    width: 323,
    height: 323,
    position: 'absolute',
    resizeMode: 'contain',
  },

  foregroundImage: {
    width: 284,
    height: 247,
    resizeMode: 'contain',
  },
});

export default SuccessPopupCreationScreen;
