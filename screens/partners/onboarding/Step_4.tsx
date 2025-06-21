import { View, TouchableOpacity, Image, Text, StyleSheet, Linking } from "react-native"
import { ASInputField } from "../component/ASInputField"
import { useState } from "react"
import { images } from "../../utils/Images";
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";
import { constant } from "../../utils/Constant";

const Step_4: React.FC = () => {
  const [accHolderName, setAccHodlerName] = useState("");
  const [accNumber, setAccNumber] = useState("")
  const [ifscCode, setIfscCode] = useState("")
  const [branchName, setBranchName] = useState("");

  return(
    <View>
    <ASInputField 
      title = {"Account Holder Name *"}
      placeholder = {"Add Name"}
      value={accHolderName}
      setValue={setAccHodlerName}
    />
  
    <ASInputField
        title= {"Bank Account Number *"}
        placeholder = {"Add Number"}
        value={accNumber}
        setValue={setAccNumber}
        />
      <ASInputField
        title= {"IFSC Code *"}
        placeholder = {"Add Code"}
        value={ifscCode}
        setValue={setIfscCode}
      />
      <ASInputField
        title= {"Branch Name *"}
        placeholder = {"Add Branch Name"}
        value={branchName}
        setValue={setBranchName}
      />
      {/* Use Current Location */}
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.locationRow} onPress={() => Linking.openURL(constant.payOuturl)}>
        <Text style={styles.exploreText}>Explore</Text>
      </TouchableOpacity>
      <Text style={styles.locationText}>{constant.whyYourBankDetails}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  exploreText: {
    marginLeft: 6,
    color: colors.appColor,
    fontFamily: Fonts.regular,
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  locationText: {
    marginLeft: 6,
    color: colors.grey,
    fontFamily: Fonts.regular,
    fontSize: 15,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: -10,
  },
  icons: {
    width: 20,
    height: 20
  }
})

export {Step_4}
