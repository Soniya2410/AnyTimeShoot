import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
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
   navigation.navigate('packageCreation');
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.bottomBar}>
        <ASButton
          title={constant.continue}
          customStyle={styles.continueBtn}
          onPress={moveToContinue}
        />
      </View>
    </View>
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
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  continueBtn: {
    height: 54,
    borderRadius: 30,
    justifyContent: 'center',
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
