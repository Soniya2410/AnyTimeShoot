import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, } from "react-native"
import { useState } from "react"
import { images } from "../../utils/Images";
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../../App";


const Step_5: React.FC = () => {
   const navigation = useNavigation<RootStackNavigationProp<'partnersOnboarding'>>();
  const [agree, setAgree] = useState(false);
  const [terms, setTerms] = useState(false);

  const Tag = ({ text } : any) => (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{text}</Text>
    </View>
  );
  
  const FileItem = ({ label, fileName } : any) => (
    <View style={styles.fileItem}>
      <Text style={styles.fileLabel}>{label}</Text>
      <View style={styles.fileBox}>
        <Text style={styles.fileName}>{fileName}</Text>
        <Image source={images.verified} />
        <Text style={styles.uploadedText}>Uploaded</Text>
      </View>
    </View>
  );
  
  const BankField = ({ label, value, count } : any) => (
    <View>
      <Text style={styles.bankLabel}>{`${count}. ${label}`}</Text>
      <Text style={styles.bankValue}>{value}</Text>
      </View>
  );
  

  return(
    <View style={styles.container}>
    {/* Personal Details */}
      <Text style={styles.profileTitle}>Personal Details</Text>
      <View style={styles.profileCard}>
        <Image
          source={images.preWedding}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Yadvendra Rathor</Text>
          <View style={{ flexDirection: 'row'}}>
          <Image source={images.email} style={styles.icon}/>
            <Text style={styles.detail}>yadvendrarathor@gmail.com</Text>
          </View>
             <View style={{ flexDirection: 'row'}}>
             <Image source={images.location} style={styles.icon}/>
            <Text style={styles.detail}> Ghaziabad</Text>
            </View>
          <View style={styles.linksContainer}>
            <Tag text="Google my business" />
            <Tag text="Portfolio" />
            <Tag text="Social Media" />
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={{ width: '5%', position: 'absolute', top: 10, right: 10}}>
          <Image source={images.edit} style={styles.icon}/>
        </TouchableOpacity>
      </View>
  
    {/* Documents */}
    <Text style={styles.sectionTitle}>Documents Details</Text>
    <View style={styles.line}></View>
      <FileItem label="Profile Picture" fileName="File.jpeg" />
      <FileItem label="Government ID" fileName="File.jpeg" />

      {/* Bank Details */}
      <Text style={styles.sectionTitle}>Bank Details</Text>
      <View style={styles.line}></View>
      <View style={styles.bankDetails}>
        <BankField label="Account Holder Name:" value="Yadvendra Rathor" count={"1"} />
        <BankField label="Account Number:" value="1212121212121212121212121212" count={"2"} />
        <BankField label="IFSC Code:" value="9UCB08700" count={"3"} />
        <BankField label="Branch Name:" value="Faridabad" count={"4"} />
      </View>

      {/* Checkboxes */}
      <View style={styles.checkboxContainer}>
        {/* <CheckBox value={agree} onValueChange={setAgree} /> */}
        <TouchableOpacity onPress={() => setAgree(pre => !pre)} >
        {agree ? (
          <Image source={images.selectedIcon} style={styles.selectedIcon} />
        ) : (
          <View style={styles.checkbox} />
        )}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          I hereby declare that all the information provided above is completely correct...
        </Text>
      </View>

      <View style={styles.checkboxContainer}>
      <TouchableOpacity onPress={() => setTerms(pre => !pre)} >
        {terms ? (
          <Image source={images.selectedIcon} style={styles.selectedIcon} />
        ) : (
          <View style={styles.checkbox} />
        )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('termsOfUse')}} >
        <Text style={[styles.checkboxLabel, { color: colors.appColor }]}>
          Terms & Conditions
        </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
    backgroundColor: '#fff',
    flex: 1
  },
  profileCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    // padding: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  profileImage: {
    width: '25%',
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  profileInfo: {
    width: '65%'
  },
  sectionTitle: {
    fontSize: 22,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginVertical: 10,
  },
  profileTitle: {
    fontSize: 22,
    color: colors.appColor,
    fontFamily: Fonts.medium,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-start',
  },
  checkboxLabel: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#333',
  },
  fileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 6,
  },
  fileName: {
    marginRight: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  uploadedText: {
    marginLeft: 5,
    color: 'green',
    fontSize: 14,
  },
  bankDetails: {
    marginTop: 10,
  },
  bankField: {
    fontSize: 14,
    marginBottom: 8,
  },
  bankLabel: {
    fontFamily: Fonts.regular,
    color: colors.grey,
    marginVertical: 5
  },
  bankValue: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    marginHorizontal: 10

  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.appColor
  },
  name: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#555',
    fontFamily: Fonts.regular,
    marginBottom: 5
  },
  linksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  tag: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 6,
    marginTop: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#333',
    fontFamily: Fonts.regular
  },
  fileItem: {
    marginTop: 10,
  },
  fileLabel: {
    fontSize: 16,
   fontFamily: Fonts.medium,
    marginBottom: 6,
  },
  checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.appColor,
    },
    checkedBox: {
      backgroundColor: colors.appColor,
    },
    icon: {
      width: 18,
      height: 18,
      marginHorizontal: 5
    },
    selectedIcon: {
      width: 20,
      height: 18,
      resizeMode: 'center',
      backgroundColor: colors.appColor,
      borderRadius: 5,
    },
})

export {Step_5}
