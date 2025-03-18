import React from "react";
import {
 Text,
 View,
 TouchableOpacity,
 StyleSheet,
 ScrollView,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {colors} from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from "../../App";

const LoginScreen: React.FC = () => {
const navigation = useNavigation<RootStackNavigationProp<'login'>>();
    
return (
<View style={styles.container}>

</View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: 'red',
}
});

export default LoginScreen;