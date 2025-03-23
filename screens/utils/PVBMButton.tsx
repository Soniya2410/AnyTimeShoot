import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from "./Colors";

interface PVBMButtonProps {
  onPress: () => void;
  title: string;
  customStyle?: object; 
}

const PVBMButton = ({ onPress, title, customStyle = {} }: PVBMButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.appColor }, customStyle]}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    paddingVertical: 15,
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { PVBMButton };