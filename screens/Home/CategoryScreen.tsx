import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const CategoryScreen: React.FC = () => {
return (
<View style={styles.baseView}>
    <Text style={styles.text}>Category Screen</Text>
</View>
);
};

const styles = StyleSheet.create({
baseView: {
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: 'white'
},
text: {
  fontSize: 20,
  color: 'black',
  textAlign: 'center'
}
});

export default CategoryScreen;