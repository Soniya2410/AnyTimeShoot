import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import { ASInputField } from "../component/ASInputField"
import { useState } from "react"
import { images } from "../../utils/Images";
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";

const Step_1: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  return(
    <View>
    <ASInputField 
      title = {"Your Name or Business Name*"}
      placeholder = {"Add Name"}
      value={name}
      setValue={setName}
    />
    <ASInputField
      title= {"Phone Number*"}
      placeholder = {"Enter Phone Number"}
      value={mobile}
      setValue={setMobile}
      />
    <ASInputField
    title= {"Email*"}
    placeholder = {"Enter Email Id"}
    value={email}
    setValue={setEmail}
    />
    <ASInputField
      title= {"Current Address*"}
      placeholder = {"Enter Address"}
      value={address}
      setValue={setAddress}
      />
      {/* Use Current Location */}
      <TouchableOpacity style={styles.locationRow}>
        <Image source={images.location} style={styles.icons}/>
        <Text style={styles.locationText}>Use My Current Location</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  locationText: {
    marginLeft: 6,
    color: colors.appColor,
    fontFamily: Fonts.regular,
    fontSize: 15,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
  },
  icons: {
    width: 20,
    height: 20
  }
})

export {Step_1}
