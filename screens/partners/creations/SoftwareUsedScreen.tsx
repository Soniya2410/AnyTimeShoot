import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import {images} from '../../utils/Images';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const categories = [
  {label: constant.adobephotoshop, icon: images.adobePhotoshop},
  {label: constant.adobeLightroom, icon: images.adobeLightroom},
  {label: constant.canva, icon: images.canva},
  {label: constant.adobePremierPro, icon: images.adobePremierPro},
  {label: constant.adobeAfterEffects, icon: images.adobeAfterEffects},
  {label: constant.davinciResolve, icon: images.davinciResolve},
  {label: constant.other, icon: ''},
];

const SoftwareUsedScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'pricingDetailPackage'>>();
  
  const [selected, setSelected] = useState<number[]>([]);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handlePress = (isOther: boolean) => {
    if (isOther) {
      setShowOtherInput(prev => !prev);
    } else {
      // You can handle software selection logic here
    }
  };

   const toggleSelection = (index: number, isOther: boolean) => {
    if (isOther) {
      setShowOtherInput(prev => !prev);
    } else {
      setSelected(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index],
      );
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.softwareUsed}</Text>
        <Text style={styles.subtitle}>{constant.softwareUsedDetail}</Text>

        {categories.map((item, index) => {
          const isOther = item.label === constant.other;
          const isSelected = selected.includes(index);
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.card}
                activeOpacity={0.8}
                 onPress={() => toggleSelection(index, isOther)}>
                <View style={styles.cardContent}>
                  {item.icon ? (
                    <Image source={item.icon} style={styles.icon} />
                  ) : (
                    <View style={[styles.icon, {backgroundColor: colors.white}]} />
                  )}
                  <Text style={styles.cardText}>{item.label}</Text>
                  {/* <Image
                    source={isOther ? images.addIcon : images.selectedCheck}
                    style={styles.nextIcon}
                  /> */}
                  {isOther ? (
                    <Image source={images.addIcon} style={styles.nextIcon} />
                  ) : isSelected ? (
                    <Image
                      source={images.selectedIcon}
                      style={styles.selectedIcon}
                    />
                  ) : (
                    <View style={styles.checkbox} />
                  )}
                </View>
              </TouchableOpacity>

              {isOther && showOtherInput && (
                <View style={styles.otherInputWrapper}>
                  <Text style={styles.otherLabel}>{constant.software}</Text>
                  <TextInput
                    style={styles.otherInput}
                    placeholder={constant.enterSoftwareName}
                    placeholderTextColor={colors.textPrimary2}
                  />
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      {/* <View style={styles.footer}> */}
        <ASButton
          title={constant.continue}
          onPress={() => navigation.navigate('deliverablePackage')}
          customStyle={styles.continueButton}
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
  scrollContent: {
    padding: 16,
  },
  continueButton: {
    backgroundColor: colors.appColor,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
    marginBottom: 16,
  },
  card: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColors,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  selectedIcon: {
    width: 20,
    height: 18,
    resizeMode: 'center',
    backgroundColor: colors.appColor,
    borderRadius: 5,
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  nextIcon: {
    width: 20,
    height: 20,
    tintColor: colors.appColor,
  },
  otherInputWrapper: {
    marginHorizontal: 12,
    borderRadius: 6,
  },
   checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.appColor,
  },
  otherLabel: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginTop: 8,
    marginLeft: 4,
  },
  otherInput: {
    height: 41,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 4,
    marginLeft: 4,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    backgroundColor: colors.white,
  },
});

export default SoftwareUsedScreen;
