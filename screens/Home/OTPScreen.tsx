import React, {useState} from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
} from 'react-native';
import { images } from "../utils/Images";
import { colors } from "../utils/Colors";
import { constant } from "../utils/Constant";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {OtpInput} from 'react-native-otp-entry';

const {width,height} = Dimensions.get('screen');

const OTPSCreen: React.FC = () => {
const [otp, setOtp] = useState<string>('');

return (
<SafeAreaView style={styles.container}>
<View style={styles.container}>
<Image source={images.otpBlankBg} style={styles.bgImg}/>
<View style={styles.baseView}>
<Text style={styles.verifyText}>{constant.verifyYourPhnNo}</Text>
<Text style={styles.enterCodeText}>{constant.enterTheCode}</Text>
</View>
</View>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  bgImg: {
    width: 161,
    height: 190,
  },
  baseView: {
    backgroundColor: colors.white,
    marginTop: 30,
    width: width,
    borderRadius: 20,
    padding: 20,
    height: height,
  },
  verifyText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: colors.appColor,
    // fontFamily: 'Poppins-semibold'
    top: 20,
    marginBottom: 20,
  },
  enterCodeText: {
    top: 20,
    fontSize: 15,
    fontWeight: "regular",
    fontFamily: 'Poppins-regular',
    color: colors.black,
  }
});

export default OTPSCreen;