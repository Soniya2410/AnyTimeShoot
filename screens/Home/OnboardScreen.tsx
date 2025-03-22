import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {images} from '../utils/Images';
import {constant} from '../utils/Constant';
import {colors} from '../utils/Colors';
import OnboardSlider from '../Home/components/OnboardSlider';

const OnboardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <OnboardSlider></OnboardSlider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default OnboardScreen;