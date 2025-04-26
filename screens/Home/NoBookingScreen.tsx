import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { ASButton } from './components/ASButton';
import { constant } from '../utils/Constant';
import { colors } from '../utils/Colors';
import CustomSlider from "./components/CustomSlider";
import { Fonts } from "../utils/Fonts";
import { images } from "../utils/Images";

const { height } = Dimensions.get('screen');

const NoBookingScreen: React.FC = () => {

  const moveToBookingNow = () => {
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>

        <CustomSlider />

        <Image
          source={images.noBooking} 
          style={styles.emptyImage}
          resizeMode="contain"
        />

        <Text style={styles.emptyText}>
          {constant.emptyText}
          <Text style={styles.highlightText}> {constant.spotNow} </Text> {constant.exlametry}
        </Text>
      </ScrollView>

      <View style={styles.bottomBar}>
        <ASButton
          title={constant.bookingNow}
          customStyle={styles.bookNowBtn}
          onPress={moveToBookingNow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    scrollContainer: {
      paddingBottom: 140, 
    },
    title: {
      fontSize: 22,
      fontFamily: Fonts.bold,
      marginHorizontal: 20,
      marginTop: 20,
      color: colors.black,
    },
    emptyImage: {
      width: '100%',
      height: 243,
      marginTop: 60,
      alignItems: 'center'
    },
    emptyText: {
      fontSize: 16,
      fontFamily: Fonts.regular,
      color: colors.black,
      textAlign: 'center',
      marginHorizontal: 20,
      marginTop: 20,
      marginLeft: 37,
    },
    highlightText: {
      color: colors.appColor,
      fontFamily: Fonts.medium,
    },
    bottomBar: {
      backgroundColor: colors.white,
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 30,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 10,
    },
    bookNowBtn: {
      height: 54,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

export default NoBookingScreen;
