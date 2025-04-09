// LocationModal.tsx
import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {ASButton} from './components/ASButton';
import {RootStackNavigationProp} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';

type LocationModalProps = {
  visible: boolean;
  onClose: () => void;
};

const YourLocationPopupScreen: React.FC<LocationModalProps> = ({
  visible,
  onClose,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const navigation = useNavigation<RootStackNavigationProp<'login'>>();

  const moveToOtpPage = () => {
    // navigation.navigate('otpScreen');
  };
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <Text style={{fontSize: 20}}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.heading}>{constant.your_location}</Text>
          <View style={styles.underline} />

          <Image
            source={images.yourLocationImage}
            style={styles.image}
            resizeMode="contain"
          />

          {['Delhi NCR', 'Gurugram', 'Other'].map(item => (
            <TouchableOpacity
              key={item}
              style={styles.radioContainer}
              onPress={() => setSelectedLocation(item)}>
              <View
                style={[
                  styles.radioCircle,
                  {
                    borderColor:
                      selectedLocation === item
                        ? colors.appColor
                        : colors.borderColor,
                  },
                ]}>
                {selectedLocation === item && (
                  <View style={styles.selectedDot} />
                )}
              </View>
              <Text style={styles.radioLabel}>{item}</Text>
            </TouchableOpacity>
          ))}

          <ASButton
            onPress={moveToOtpPage}
            title={constant.continue}
            customStyle={styles.continueButton}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: '55%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    position: 'relative',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  heading: {
    fontSize: 14,
    marginBottom: 15,
    fontFamily: Fonts.medium,
    color: colors.black,
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'flex-start',
    paddingLeft: 26,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.appColor,
  },
  radioLabel: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
  },
  continueButton: {
    marginTop: 20,
    borderRadius: 27,
    top: 20,
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: colors.borderColor,
    marginBottom: 15,
  },
});

export default YourLocationPopupScreen;
