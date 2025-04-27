import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";

interface ASButtonProps {
  onPress: () => void;
  title: string;
  customStyle?: object; 
  textStyle?: object;
}

const ASButton = ({ onPress, title, customStyle = {}, textStyle = {} }: ASButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.appColor }, customStyle]}
      onPress={onPress}
    >
    <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appColor,
    height: 54,
    // width: '80%', 
    borderRadius: 27, 
  },
  textStyle: {
    // paddingVertical: 12,
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    fontFamily: Fonts.medium
  },
});

export { ASButton };