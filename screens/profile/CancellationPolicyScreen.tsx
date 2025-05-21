import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import { Fonts } from '../utils/Fonts';
import { colors } from '../utils/Colors';

const CancellationPolicyScreen: React.FC = () => {
  return (
   <SafeAreaView style={styles.container}>
         <ScrollView>
           <View style={{ marginHorizontal: 16}}>
           <Text style={styles.title}>Cancellation Policy</Text>
           <Text style={styles.subTitle}>Its a long established fact that a reader will be distracted by the readable .</Text>
           <View>
             <Text style={styles.otherTitle}>1. Introduction</Text>
             <Text style={styles.content}>
             Welcome to PhotoMaster! By downloading or using our app, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</Text>
           </View>
           <View>
             <Text style={styles.otherTitle}>2. Definitions</Text>
             <Text style={styles.content}>
             * "App" refers to the PhotoMaster mobile application.</Text>
             <Text style={styles.content}>
             * "User" refers to anyone who downloads, installs, or uses the App.</Text>
             <Text style={styles.content}>
             * "Content" refers to any text, graphics, images, photographs, or other material provided through the App.</Text>
           </View>
           <View>
             <Text style={styles.otherTitle}>3. User Accounts</Text>
             <Text style={styles.content}>
             * Registration: Users must create an account to access certain features. You agree to provide accurate and complete information during registration.</Text>
             <Text style={styles.content}>
             * Account Security: You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.</Text>
             </View>
             <View>
             <Text style={styles.otherTitle}>4. Privacy Policy </Text>
             <Text style={styles.content}>
             We value your privacy. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information.</Text>
           </View>
   
           <View>
             <Text style={styles.otherTitle}>5. Usage Guidelines</Text>
             <Text style={styles.content}>
             * Permitted Uses: The App is for personal and professional photography use. Users can edit, store, and share photos through the App.</Text>
             <Text style={styles.content}>
             * Prohibited Uses: Users must not misuse the App by engaging in illegal activities, distributing harmful software, or violating any laws. Specifically, users must not upload content that is offensive, illegal, or infringes on the rights of others.</Text>
             </View>
   
             <View>
             <Text style={styles.otherTitle}>6. User Content</Text>
             <Text style={styles.content}>
             * Ownership: Users retain ownership of the photos and content they upload to the App. By submitting content, you grant PhotoMaster a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content for the purpose of operating and improving the App.</Text>
             <Text style={styles.content}>
             * Responsibility: You are solely responsible for the content you upload and must ensure it does not violate any third-party rights or laws.</Text>
             </View>
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
  title : {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 16
  },
  subTitle: {
    fontFamily: Fonts.regular
  },
  otherTitle : {
    fontFamily: Fonts.medium,
    fontSize: 14,
    marginVertical: 10
  },
  content : {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color : colors.textPrimary2
  }
})
export default CancellationPolicyScreen;