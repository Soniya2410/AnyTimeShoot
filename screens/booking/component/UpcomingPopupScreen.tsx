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
import {images} from '../../utils/Images';
import {icons} from '../../utils/Icons';
import {colors} from '../../utils/Colors';
import {ASButton} from '../../components/ASButton';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {RootStackNavigationProp} from '../../../App';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

type UpComingPopupProps = {
  visible: boolean;
  onClose?: () => void;
  onContinue: () => void;
};

const UpcomingPopupScreen: React.FC<UpComingPopupProps> = ({
  visible,
  onClose,
  onContinue,
}) => {
 const navigation = useNavigation<RootStackNavigationProp<'upcomingbookingDetails'>>();
    


  return (
    <Modal visible={visible} transparent animationType='none'>
      <View style={styles.modalBackground}>
        <View style={styles.modalBox}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Image source={icons.closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>

          <Image
            source={images.upcomingCompleted}
            style={styles.illustration}
            resizeMode="contain"
          />

          <Text style={styles.emptyText}>
            {constant.shootStarted}
            <Text style={styles.highlightText}> {constant.successfully} </Text>{' '}
            {constant.exlametry}
          </Text>

          <ASButton
            onPress={onContinue}
            customStyle={styles.continueButton}
            title={constant.continue} />
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
  highlightText: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: colors.black,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginLeft: 37,
  },
});

export  {UpcomingPopupScreen};