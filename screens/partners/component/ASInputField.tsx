import { StyleSheet, Text, TextInput, View } from "react-native"
import { Fonts } from "../../utils/Fonts"

const ASInputField = ({title, placeholder, value, setValue} : any) => {
  return(
    <View>
       <Text style={styles.label}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#ccc"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginBottom: 8,

  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    fontFamily: Fonts.medium,
    marginBottom: 20,
    fontSize: 16,
  },
})

export { ASInputField}