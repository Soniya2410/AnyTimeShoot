import {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {constant} from '../../utils/Constant';
import {images} from '../../utils/Images';
import {ASButton} from '../../components/ASButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const PartnerOTPScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp<'partnersOnboarding'>>();
  const [selectedOption, setSelectedOption] = useState('phone');

  const handleContinue = () => {
    navigation.navigate('partnerOTPVerify', {selectionOption: selectedOption});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: 16, height: '90%'}}>
        <Text style={styles.title}>{constant.getOTP}</Text>
        <Text style={styles.subtitle}>{constant.otpMsg}</Text>
        <View style={styles.progressContainer}>
          {[0, 1, 2, 3, 4].map(index => (
            <View
              key={index}
              style={[
                styles.dot,
                index === 0 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <Text style={styles.stepText}>Step 1 of 5</Text>

        <TouchableOpacity
         style={[
            styles.optionBox,
            selectedOption === 'phone' && styles.selectedBox,
          ]}
          onPress={() => setSelectedOption('phone')}>
          <Image source={images.phoneOtp} style={styles.icon} />
          <Text style={styles.optionLabel}>Phone number</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity
           style={[
            styles.optionBox,
            selectedOption === 'email' && styles.selectedBox,
          ]}
          onPress={() => setSelectedOption('email')}>
          <Image source={images.emailOtp} style={styles.emailIcon} />
          <Text style={styles.optionLabel}>E-Mail</Text>
        </TouchableOpacity>
      </View>
      <ASButton
        title={'Continue'}
        onPress={handleContinue}
        customStyle={styles.buttonStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonStyle: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: colors.appColor,
    marginTop: 24,
    fontFamily: Fonts.medium,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  dot: {
    height: 4,
    borderRadius: 2,
    marginRight: 8,
    flex: 1,
  },
  activeDot: {
    backgroundColor: colors.appColor,
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  stepText: {
    fontSize: 12,
    color: '#888',
    fontFamily: Fonts.regular,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  optionBox: {
    width: '100%',
    paddingVertical: 24,
    alignItems: 'center',
    marginVertical: 8,
  },
  optionLabel: {
    marginVertical: 15,
    fontSize: 16,
    color: colors.textPrimary2,
    fontFamily: Fonts.medium,
  },
  orText: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    fontFamily: Fonts.medium,
    marginVertical: 12,
  },
  continueButton: {
    backgroundColor: '#E91E63',
    width: '90%',
    paddingVertical: 16,
    borderRadius: 50,
    marginTop: 'auto',
    marginBottom: 20,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    backgroundColor: '#aaa',
    height: 1,
    width: '40%',
    marginVertical: 12,
    marginHorizontal: 10,
    marginTop: 10,
  },
  icon: {
    width: 99,
    height: 120,
  },
  emailIcon: {
    width: 99,
    height: 80,
  },
  selectedBox: {
    borderWidth: 2,
    borderColor: colors.appColor,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
  },
});

export default PartnerOTPScreen;
