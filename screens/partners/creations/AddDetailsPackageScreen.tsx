import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const AddDetailsPackageScreen: React.FC = () => {
 const navigation = useNavigation<RootStackNavigationProp<'addDetailsPackage'>>();
  const [selectedStudio, setSelectedStudio] = useState<'Yes' | 'No' | null>(null);

  const moveToAddStudioDetails = () => {
    navigation.navigate('addStudioDetailsPackage');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.addDetails}</Text>
        <Text style={styles.subTitle}>{constant.giveSome}</Text>

        <View style={styles.padingView}>
          <Text style={styles.labelTitle}>{constant.packageName}</Text>
          <TextInput placeholder={constant.nameYourPackage} placeholderTextColor= {colors.lineColor} style={styles.input} />
        </View>

        <View style={styles.padingView}>
          <Text style={styles.labelTitle}>{constant.packageDesc}</Text>
          <TextInput
            placeholder={constant.addSomeBasic}
            placeholderTextColor= {colors.lineColor}
            style={[styles.input, styles.multilineInput]}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.padingView}>
       <Text style={styles.labelTitle}>{constant.shootIsStudio}</Text>
       <View style={styles.yesNoContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedStudio === 'Yes' && styles.selectedOption,
          ]}
          onPress={() => setSelectedStudio('Yes')}
        >
          <Text
            style={[
              styles.optionText,
              selectedStudio === 'Yes' && styles.selectedOptionText,
            ]}
          >
            Yes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedStudio === 'No' && styles.selectedOption,
          ]}
          onPress={() => setSelectedStudio('No')}
        >
          <Text
            style={[
              styles.optionText,
              selectedStudio === 'No' && styles.selectedOptionText,
            ]}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
    </View>

        <View style={styles.padingView}>
          <Text style={styles.labelTitle}>
            {constant.shootDuration}
            <Text style={styles.hoursHighlight}> {constant.inHours}</Text>
          </Text>
          <TextInput placeholder={constant.Eg} placeholderTextColor= {colors.lineColor} style={styles.input} />
        </View>

        <View style={styles.padingView}>
          <Text style={styles.noteHighlight}>{constant.note}</Text>
          <Text style={styles.hoursHighlight}>
            {constant.shootHours}
            <Text style={styles.hightlight}>{constant.hours}</Text>
          </Text>
          <Text style={styles.hoursHighlight}>
            {constant.twoNumber}
            <Text style={styles.hightlight}>
              {constant.dont}
              <Text style={styles.hoursHighlight}>{constant.mentionNumberofDays}</Text>
            </Text>
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomButtonContainer}>
        <ASButton
          title={constant.continue}
          customStyle={styles.continueButton}
          onPress={moveToAddStudioDetails}
        />
      </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    marginRight: 16,
    marginLeft: 16,
    top: 10,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
    marginRight: 16,
    marginLeft: 16,
    top: 10,
  },
  labelTitle: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.textPrimary2,
    top: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lineColor,
    padding: 10,
    borderRadius: 8,
    marginTop: 30,
    height: 45,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
  padingView: {
    marginRight: 16,
    marginLeft: 16,
  },
  hoursHighlight: {
    fontFamily: Fonts.regular,
    fontSize: 10,
    color: colors.textPrimary2,
  },
  hightlight: {
    fontFamily: Fonts.medium,
    fontSize: 10,
    color: colors.black,
    marginVertical: 10
  },
  noteHighlight: {
    fontFamily: Fonts.medium,
    fontSize: 10,
    color: colors.appColor,
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: colors.appColor,
    margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 15,  
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  scrollContent: {
    paddingBottom: 100, 
  },
  multilineInput: {
    height: 100,
  },
  yesNoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    gap: 16,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lineColor,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  selectedOption: {
    backgroundColor: colors.appColor,
    borderColor: colors.appColor,
  },
  optionText: {
    color: colors.textPrimary2,
    fontFamily: Fonts.medium,
  },
  selectedOptionText: {
    color: colors.white,
  },
});

export default AddDetailsPackageScreen;
