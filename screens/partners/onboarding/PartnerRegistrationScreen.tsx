import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native"
import { images } from "../../utils/Images";
import { colors } from "../../utils/Colors";
import { ASInputField } from "../component/ASInputField";
import { Step_1 } from "./Step_1";
import { Fonts } from "../../utils/Fonts";
import { ASButton } from "../../components/ASButton";
import { useEffect, useState } from "react";
import { Step_2 } from "./Step_2";
import { Step_3 } from "./Step_3";
import { Step_4 } from "./Step_4";
import { constant } from "../../utils/Constant";
import { Step_5 } from "./Step_5";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../../App";

const TOTAL_STEPS = 5;

const PartnerRegistrationScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'partnersOnboarding'>>();
  const [currentStep, setCurrentStep] = useState(0);
  
  const renderStepComponent = () => {
    switch (currentStep) {
      case 0: return <Step_1 />;
      case 1: return <Step_2 />;
      case 2: return <Step_3 />;
      case 3: return <Step_4 />;
      case 4: return <Step_5 />;
      case 5: return <FinalStep />;
      default: return <Step_1 />;
    }
  };

  const FinalStep = () => {
    useEffect(() => {
      moveToNextPage();
    }, []);
  
    return null; // or loading...
  };

  
  const moveToNextPage = () => {
    navigation.navigate('packageCreationSuccess');
  }

  const moveToNextScreen = () => {
    setCurrentStep(currentStep + 1);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <View style={{ marginHorizontal: 16, height: '70%'}}>
      <Text style={styles.heading}>{currentStep == 0 || currentStep == 1 ?
        constant.describePhotography : currentStep == 2 ? 
        constant.uploadDocument : currentStep == 3? 
        constant.enterBankDetails : constant.quickReviewBefore }</Text>
      <Text style={styles.subText}>{currentStep == 0 || currentStep == 1 ? 
        constant.pleaseEnterYourInfo : currentStep == 2 ? constant.uploadingYourDocuments: 
        currentStep == 3 ? constant.forSmoothAndHassle: constant.reviewTheInfo}</Text>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        {[...Array(TOTAL_STEPS)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressDot,
              index === currentStep ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      <Text style={styles.stepText}>Step {currentStep + 1} of {TOTAL_STEPS}</Text>
       {/* Input Fields */}
       {renderStepComponent()}
      </View>
      </ScrollView>
      <View style={styles.bottomView}>
      <ASButton
        title={"Contiune"}
        onPress={moveToNextScreen}
        />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  stepText: {
    fontSize: 12,
    color: '#666',
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    marginBottom: 14,
    textAlign:'right'
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  progressDot: {
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
  heading: {
    fontSize: 20,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginVertical: 4,
  },
  subText: {
    fontSize: 14,
    fontFamily: Fonts.light,
    marginBottom: 16,
  },
  bottomView: {
    paddingBottom: 10
  }
})

export default PartnerRegistrationScreen;