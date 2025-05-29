import React, { useState } from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import { colors } from '../utils/Colors';
import { ASInputField } from '../partners/component/ASInputField';
import { ASButton } from '../components/ASButton';

const ContactUsScreen: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const moveToNextScreen = () => {
     
    }
    
  return (
   <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 16, marginVertical: 10}}>
        <ASInputField 
          title = {"User Name"}
          placeholder = {"Add Name"}
          value={name}
          setValue={setName}
        />
        <ASInputField 
          title = {"Email"}
          placeholder = {"Email"}
          value={email}
          setValue={setEmail}
        />
        <ASInputField 
          title = {"Phone Number"}
          placeholder = {"Phone Number"}
          value={phone}
          setValue={setPhone}
        />
        <ASInputField 
          title = {"Message"}
          placeholder = {"Message"}
          value={message}
          setValue={setMessage}
        />
         <ASButton
            title={"Contiune"}
            onPress={moveToNextScreen}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    backgroundColor: colors.white,
  },
})

export default ContactUsScreen;