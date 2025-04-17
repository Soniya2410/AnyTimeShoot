import React, {useState, useCallback} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../utils/Images';
import {constant} from '../../utils/Constant';
import {ASButton} from '../components/ASButton';
import {RootStackNavigationProp} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import { icons } from '../../utils/Icons';

type LocationModalProps = {
  visible: boolean;
  onClose: () => void;
};

const LOCATION_OPTIONS = ['Delhi NCR', 'Gurugram', 'Other'];

const YourLocationPopupScreen: React.FC<LocationModalProps> = ({
  visible,
  onClose,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const navigation = useNavigation<RootStackNavigationProp<'login'>>();
  const [showFirst, setShowFirst] = useState(0);

  const moveToOtpPage = useCallback(() => {
    // Use functional update to ensure we get the latest state
    setShowFirst(prev => {
      const newValue = prev + 1;
      console.log('Selected Location:', newValue);
      
      if (newValue > 1) {
        onClose();
      }
      
      return newValue;
    });
    // navigation.navigate('otpScreen');
  }, [onClose]);

  const handleLocationSelect = useCallback((location: string) => {
    setSelectedLocation(location);
  }, []);

  return (
    <Modal animationType="fade" transparent visible={visible}>
      {/* <View> */}
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
          <TouchableOpacity onPress={onClose} style={{width: 40, height: 30, marginLeft: 0, marginTop: 10}}>
            <Image source={icons.closeIcon} style={styles.closeIconText}/>
          </TouchableOpacity>

          <Text style={styles.heading}>{constant.your_location}</Text>
          </View>
          <View style={styles.underline} />
         {showFirst == 0 && (
          <Image
            source={images.yourLocationImage}
            style={styles.image}
            resizeMode="contain"
          />
         )}
          {showFirst == 0 &&  LOCATION_OPTIONS.map(item => (
              <LocationOption
                key={item}
                label={item}
                selected={selectedLocation === item}
                onPress={handleLocationSelect}
              />
            ))}
          {showFirst == 1 && (
            <View style={{alignItems: 'center', width: '100%'}}>
             <Image
             source={images.locationError}
             style={styles.image}
             resizeMode="contain"
           />
           <Text style={styles.locationError}>{constant.locationError}<Text style={styles.comingSoonLabel}>{constant.comingSoon}</Text></Text>
           </View>
          )}
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

type LocationOptionProps = {
  label: string;
  selected: boolean;
  onPress: (location: string) => void;
};

const LocationOption: React.FC<LocationOptionProps> = ({
  label,
  selected,
  onPress,
}) => (
  <TouchableOpacity
    style={styles.radioContainer}
    onPress={() => onPress(label)}>
    <View
      style={[
        styles.radioCircle,
        {
          borderColor: selected ? colors.appColor : colors.borderColor,
        },
      ]}>
      {selected && <View style={styles.selectedDot} />}
    </View>
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  // closeIcon: {
  //   position: 'absolute',
  //   top: 20,
  //   left: 10,
  // },
  closeIconText: {
   width: 40,
   height: 30,
  },
  heading: {
    fontSize: 16,
    marginBottom: 15,
    fontFamily: Fonts.medium,
    color: colors.black,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '90%'
  },
  image: {
    width: 150,
    height: 150,
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
    marginVertical: 20,
    width:'90%',
    marginHorizontal: 16
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: colors.borderColor,
    marginBottom: 15,
  },
  locationError: {
    fontSize: 14,
    marginBottom: 15,
    fontFamily: Fonts.medium,
    color: colors.black,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '80%'
  },
  comingSoonLabel: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.appColor,
  }
});

export default React.memo(YourLocationPopupScreen);