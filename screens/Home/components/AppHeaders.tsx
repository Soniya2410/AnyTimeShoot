import {Image, Text, View, StyleSheet} from 'react-native';
import {constant} from '../../utils/Constant';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import { useState } from 'react';
import { Fonts } from '../../utils/Fonts';


const AppHeaders = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.anyTimeLabel}>{constant.anyTime}<Text style={styles.shootLabel}>{constant.shoot}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: colors.appColor,
  },
  anyTimeLabel: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    marginHorizontal: 5
  },
  shootLabel: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: colors.appColor
  }
});

export default AppHeaders;