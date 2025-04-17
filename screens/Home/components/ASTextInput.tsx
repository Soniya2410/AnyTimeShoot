import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';
import { colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { constant } from '../../utils/Constant';
import { images } from '../../utils/Images';

interface ASTextInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  placeholder: string;
}


const ASTextInput = ({inputValue, setInputValue, placeholder, keyboardType = "default"} : ASTextInputProps) => {
  return (
     <View style={styles.phoneNoView}>
              <View style={[styles.inputContainer, { width: inputValue.length < 10 ? '95%' : '90%'}]}>
                <Text style={styles.phoneNoText}>{placeholder}</Text>
                  <TextInput
                    maxLength={keyboardType === 'phone-pad' ? 10 : 50}
                    selectionColor={colors.appColor}
                    style={styles.input}
                    autoCapitalize="none"
                    value={inputValue || ''}
                    onChangeText={(text) =>{ 
                      console.log('Text', text);
                      setInputValue(text)}}
                  />
                </View>
                {inputValue.length === 10 && (
                    <Image
                      source={images.mobileVerifyTick}
                      style={styles.mobileVerifyTick}
                    />
                  )}
              </View>
  )
}

const styles = StyleSheet.create({
  phoneNoView: {
      height: 67,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: colors.black,
      padding: 5
    },
    inputContainer: {
      width: '90%',
    },
    phoneNoText: {
      color: colors.placeHolderColor,
      fontSize: 14,
      fontFamily: Fonts.regular,
      marginTop: 15,
      // backgroundColor: 'red'
    },
      input: {
        fontSize: 15,
        fontFamily: Fonts.regular,
        color: colors.black,
        marginBottom: 5
    
      },
      mobileVerifyTick: {
        height: 20,
        width: 20,
        justifyContent:'flex-end',
        alignItems:'center'
      },
});

export {ASTextInput};
