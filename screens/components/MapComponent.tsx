// import React, {useRef, useState} from 'react';
// import {
//   Dimensions,
//   Image,
//   ScrollView,
//   StyleSheet,
//   View,
//   Text,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import {images} from '../../utils/Images';
// import {colors} from '../../utils/Colors';
// import {Fonts} from '../../utils/Fonts';
// import {constant} from '../../utils/Constant';
// import {useNavigation} from '@react-navigation/native';
// import {RootStackNavigationProp} from '../../../App';

// import MapView, {Marker} from 'react-native-maps';

// const MapComponent = () => {
//   return (
//     <View style={{marginVertical: 20}}>
//       <Text style={styles.sectionTitle}>{constant.studioLocation}</Text>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825, 
//           longitude: -122.4324,
//           latitudeDelta: 0.005,
//           longitudeDelta: 0.005,
//         }}>
//         <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   map: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontFamily: Fonts.medium,
//   },
// });

// export default MapComponent;
