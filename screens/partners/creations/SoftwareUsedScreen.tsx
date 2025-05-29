import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
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
  function handleCategoryPress(label: any): void {
    throw new Error('Function not implemented.');
  }
  const [showOtherInput, setShowOtherInput] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.softwareUsed}</Text>
        <Text style={styles.subtitle}>{constant.softwareUsedDetail}</Text>
        {categories.map((item, index) => {
          const isOther = item.label === constant.other;

          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.card}
                activeOpacity={0.8}
                onPress={() => {
                  if (isOther) {
                    setShowOtherInput(prev => !prev);
                  } else {
                    // Add your checkbox toggle logic here if needed
                  }
                }}>
                <View style={styles.cardContent}>
                  {item.icon ? (
                    <Image source={item.icon} style={styles.icon} />
                  ) : (
                    <View
                      style={[styles.icon, {backgroundColor: colors.white}]}
                    />
                  )}

                  <Text style={styles.cardText}>{item.label}</Text>

                  {isOther ? (
                    <TouchableOpacity
                      onPress={() => setShowOtherInput(prev => !prev)}>
                      <Image source={images.addIcon} style={styles.nextIcon} />
                    </TouchableOpacity>
                  ) : (
                    <Image source={images.selectedCheck} style={styles.nextIcon} />
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

      <View style={styles.footer}>
        <ASButton
          title={constant.continue}
          onPress={() => console.log('Continue pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textPrimary2,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    padding: 16,
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
    resizeMode: 'contain',
    marginRight: 12,
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  nextIcon: {
    width: 12,
    height: 12,
  },
  otherInputWrapper: {
    marginHorizontal: 12,
    borderRadius: 6,
  },
  otherInput: {
    height: 41,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 4,
    marginLeft: 16,
  },
  otherLabel: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginTop: 8,
    marginLeft: 16,
  },
});

export default SoftwareUsedScreen;
