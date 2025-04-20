import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { images } from '../utils/Images';
import { icons } from '../utils/Icons';
import { colors } from '../utils/Colors';
import { ASButton } from './components/ASButton';
import { constant } from '../utils/Constant';
import { Fonts } from '../utils/Fonts';

const { width } = Dimensions.get('window');

type CompletedPopupProps = {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
};

const CompletedPopupScreen: React.FC<CompletedPopupProps> = ({
  visible,
  onClose,
  onContinue,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalBox}>
          
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Image source={icons.closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>

          <Image
            source={images.completedPopup} 
            style={styles.illustration}
            resizeMode="contain"
          />

          <Text style={styles.title}>Shoot Completed & Work Delivered</Text>

          <Text style={styles.subtitle}>Rate your experience ?</Text>

          {/* <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity> */}

          <ASButton onPress={onContinue} customStyle={styles.continueButton}
           title={constant.continue}>

          </ASButton>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: width * 0.85,
    height: 373,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    padding: 8,
    zIndex: 1,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  illustration: {
    width: '100%',
    height: 180,
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    marginTop: 25,
  },
  subtitle: {
    fontSize: 10,
    fontFamily: Fonts.regular,
    color: colors.appColor, 
    textAlign: 'center',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: colors.appColor, 
    paddingVertical: 14,
    borderRadius: 30,
    width: '100%',
    marginTop: 20,
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.black,
    textAlign: 'center',
  },
});

export default CompletedPopupScreen;
