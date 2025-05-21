import { Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { images } from "../../utils/Images"
import { colors } from "../../utils/Colors"
import { constant } from "../../utils/Constant"
import { Fonts } from "../../utils/Fonts"
import { ASButton } from "../../components/ASButton"
import { RootStackNavigationProp } from "../../../App"
import { useNavigation } from "@react-navigation/native"

const PackageCreationSuccessScreen = () => {
const navigation = useNavigation<RootStackNavigationProp<'partnersOnboarding'>>();
  const moveToNextScreen = () => {
    navigation.navigate('chooseCategoryCreation');
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Image source={images.creation} style={styles.imageStyle}/>
        <Text style={styles.youAre}>{constant.yourArePartner}<Text style={styles.partner}>{constant.partner}</Text>{constant.yourArePartner2}</Text>
        <Text style={styles.createPackage}>{constant.createFirstPackage}</Text>

      </View>
      <ASButton
        title="Create Package"
        onPress={moveToNextScreen}
      />
      <TouchableOpacity onPress={() => {}} >
        <Text style={styles.doItLater}>{constant.doItLater}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: colors.white,
    flex: 1
  },
  viewStyle : {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
    marginHorizontal: 16
  },
  imageStyle : {
    width: '90%',
    height: 300
  },
  youAre : {
    fontFamily: Fonts.medium,
    // color: colors.appColor,
    fontSize: 20
  },
  partner : {
    fontFamily: Fonts.medium,
    color: colors.appColor,
    fontSize: 20
  },
  createPackage : {
    fontFamily: Fonts.regular,
    color: colors.textPrimary2,
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 16,
    marginVertical: 10
  },
  doItLater : {
    fontFamily: Fonts.regular,
    color: colors.appColor,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 10
  }
})

export default PackageCreationSuccessScreen;