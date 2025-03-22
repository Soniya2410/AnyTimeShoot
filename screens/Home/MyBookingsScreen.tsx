import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyBookingsScreen: React.FC = () => {
  return (
    <View style={styles.baseView}>
      <Text style={styles.text}>My Bookings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default MyBookingsScreen;
