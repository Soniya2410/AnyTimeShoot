import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {constant} from '../../utils/Constant';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {colors} from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const PricingDetailPackageScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'pricingDetailPackage'>>();

  const moveToNextScreen = () => {
    navigation.navigate('successCreation')
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        
        <View style={styles.fullScreen}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            
            <Text style={styles.title}>{constant.pricingDetails}</Text>
            <Text style={styles.subTitle}>{constant.provideTheOverAll}</Text>

            <View style={styles.paddingView}>
              <Text style={styles.enterPrice}>{constant.enterPrice}</Text>
              <TextInput
                style={styles.input}
                placeholder={constant.enterPricingValue}
                placeholderTextColor={colors.lineColor}
                keyboardType="numeric"
              />
            </View>

            <View style={{marginTop: 16}}>
              <Text style={styles.pleaseNote}>{constant.pleaseNote}</Text>
              <Text style={styles.pricingDetails}>{constant.pricingDetail1}</Text>
              <Text style={styles.pricingDetails}>{constant.pricingDetail2}</Text>
              <Text style={styles.pricingDetails}>{constant.pricingDetail3}</Text>
               <Text style={styles.pricingDetails}>{constant.pricingDetail4}</Text>
            </View>
          </ScrollView>

          {/* Fixed Bottom Button */}
          {/* <View style={styles.bottomContainer}> */}
            <ASButton
              title={constant.continue}
              // customStyle={styles.continueButton}
              onPress={moveToNextScreen}
            />
          {/* </View> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
   fullScreen: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 16,
},
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100, 
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
    marginTop: 10,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary2,
    marginTop: 5,
  },
  paddingView: {
    marginTop: 25,
  },
  enterPrice: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: colors.textPrimary2,
  },
  input: {
    borderColor: colors.lineColor,
    borderRadius: 8,
    borderWidth: 1,
    height: 45,
    marginTop: 5,
    paddingHorizontal: 10,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
  pleaseNote: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.appColor,
    marginBottom: 5,
  },
  pricingDetails: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    color: colors.textPrimary2,
  },
  bottomContainer: {
   paddingBottom: 10,
  },
  continueButton: {
    backgroundColor: colors.appColor,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
  },
});

export default PricingDetailPackageScreen;
