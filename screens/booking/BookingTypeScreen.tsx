import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  BookingType,
  BookingOption,
  BookingTypeScreenProps,
} from './component/type';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';
import {colors} from '../utils/Colors';
import {Fonts} from '../utils/Fonts';
import {constant} from '../utils/Constant';
import {ASButton} from '../components/ASButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const BookingTypeScreen: React.FC<BookingTypeScreenProps> = ({
  onSelect,
  onCreatePackage,
}) => {
  const navigate = useNavigation<RootStackNavigationProp<'bookingType'>>();

  const [selectedType, setSelectedType] = useState<BookingType>('instant');

  const bookingOptions: BookingOption[] = [
    {
      type: 'instant',
      title: constant.instantBooking,
      description: constant.forLastMinutephotography,
      recommendedFor: [
        constant.birthday,
        constant.preWedding,
        constant.food,
        constant.maternity,
        constant.haldi,
        constant.portfolio,
      ],
      terms: [
        constant.confirmAvailabilityAnd,
        constant.prepareEquipement,
        constant.arriveOnTime,
        constant.goodServiceQuality,
        constant.notifyIssues,
        constant.professionalConduct,
        constant.pricing,
        constant.followSafety,
        constant.respectPrivacy,
        constant.handleFeedback,
      ],
      subTerms: [
        constant.confirmDesc,
        constant.prepareEquipmentDesc,
        constant.arriveOnTimeDesc,
        constant.goodServiceQualityDesc,
        constant.notifyIssuesDesc,
        constant.professionalDesc,
        constant.pricingDesc,
        constant.followSafetyDesc,
        constant.respectDesc,
        constant.handleFeedbackDesc,
      ],
    },
    {
      type: 'advance',
      title: 'Advance Booking',
      description: 'For Advance Photoshoot Requests',
      recommendedFor: [
        constant.wedding,
        constant.preWedding,
        constant.product,
        constant.socialMedia,
        constant.haldi,
        constant.portfolio,
      ],
      terms: [
        constant.confirmAvailabilityAnd,
        constant.prepareEquipement,
        constant.arriveOnTime,
        constant.goodServiceQuality,
        constant.notifyIssues,
        constant.professionalConduct,
        constant.pricing,
        constant.followSafety,
        constant.respectPrivacy,
        constant.handleFeedback,
      ],
      subTerms: [
        constant.confirmDesc,
        constant.prepareEquipmentDesc,
        constant.arriveOnTimeDesc,
        constant.goodServiceQualityDesc,
        constant.notifyIssuesDesc,
        constant.professionalDesc,
        constant.pricingDesc,
        constant.followSafetyDesc,
        constant.respectDesc,
        constant.handleFeedbackDesc,
      ],
    },
  ];

  const selectedOption = bookingOptions.find(
    option => option.type === selectedType,
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subHeader}>{constant.chooseYourBookingType}</Text>
      <Text style={styles.description}> {constant.selectYourPrefreed}</Text>

      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        {bookingOptions.map(option => (
          <TouchableOpacity
            key={option.type}
            style={[
              styles.toggleButton,
              selectedType === option.type && styles.selectedToggleButton,
            ]}
            onPress={() => setSelectedType(option.type)}>
            <Text
              style={[
                styles.toggleButtonText,
                selectedType === option.type && styles.selectedToggleText,
              ]}>
              {option.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedOption && (
        <View style={styles.optionContent}>
          <Text style={styles.optionTitle}>{selectedOption.title}</Text>
          <Text style={styles.optionDescription}>
            {selectedOption.description}
          </Text>

          <Text style={styles.recommendedHeader}>Recommended for:</Text>
          <View style={styles.tagsContainer}>
            {selectedOption.recommendedFor.map((item, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.line}></View>

          {/* <Text style={styles.termsHeader}>
            {constant.termsFor} {selectedOption.title}
          </Text>
          {selectedOption.terms.map((term, index) => (
            <Text key={index} style={styles.termText}>
              {term} 
            </Text>
            
          ))} */}

          <Text style={styles.termsHeader}>
            {constant.termsFor} {selectedOption.title}
          </Text>

          {selectedOption.terms.map((term, index) => (
            <View key={index}>
              <Text style={styles.termText}>{term}</Text>
              {selectedOption.subTerms[index] && (
                <Text style={styles.subTermText}>
                {selectedOption.subTerms[index]}
                </Text>
              )}
            </View>
          ))}
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => onSelect(selectedOption.type)}>
            <Text style={styles.learnMoreText}>
              {constant.learnMoreAbout} {selectedOption.title}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <ASButton
        customStyle={styles.createPackageButton}
        onPress={onCreatePackage}
        title={constant.createPackage}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'left',
    color: colors.black,
    fontFamily: Fonts.medium,
  },
  description: {
    fontSize: 10,
    textAlign: 'left',
    marginBottom: 16,
    color: colors.textPrimary2,
    fontFamily: Fonts.light,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: 'clear',
    borderRadius: 8,
    borderColor: colors.lineColor,
    borderWidth: 1,
    height: 50,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedToggleButton: {
    backgroundColor: colors.appColor,
    borderRadius: 8,
  },
  toggleButtonText: {
    color: colors.lineColor,
    fontFamily: Fonts.regular,
    fontSize: 15,
  },
  selectedToggleText: {
    color: colors.white,
    fontFamily: Fonts.regular,
    fontSize: 15,
  },
  optionContent: {
    padding: 12,
  },
  optionTitle: {
    fontSize: 25,
    color: colors.appColor,
    marginBottom: 8,
    fontFamily: Fonts.medium,
  },
  optionDescription: {
    fontSize: 10,
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
    marginBottom: 12,
  },
  recommendedHeader: {
    fontSize: 10,
    fontFamily: Fonts.regular,
    color: colors.black,
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: colors.lineColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 8,
    color: colors.textPrimary2,
    fontFamily: Fonts.regular,
  },
  termsHeader: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    marginBottom: 8,
    color: colors.appColor,
  },
  termText: {
    fontSize: 10,
    color: colors.black,
    marginBottom: 4,
  },
  learnMoreButton: {
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 4,
  },
  learnMoreText: {
    color: colors.appColor,
    fontFamily: Fonts.regular,
    fontSize: 10,
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  createPackageButton: {
    marginVertical: 24,
    padding: 16,
    backgroundColor: colors.appColor,
    borderRadius: 50,
    alignItems: 'center',
    height: 54,
  },
  createPackageText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  line: {
    width: '100%',
    height: 1,
    color: colors.appColor,
    backgroundColor: colors.appLightColor,
    marginBottom: 25,
  },
  subTermText: {
    fontSize: 7,
    color: colors.textPrimary2,
    marginBottom: 6,
    fontFamily: Fonts.regular,
    textAlign: 'left',
  },
});

export default BookingTypeScreen;
