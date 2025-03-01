import {Image, Text, View, StyleSheet} from 'react-native';
import {constant} from '../../utils/Constant';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';

const AppHeaders = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.logoText}>{constant.title}</Text>
      </View>

      <View style={styles.iconsContainer}>
        <Image source={images.notification} style={styles.icon} />
        <Image source={images.heart} style={styles.icon} />
        <Image source={images.message} style={styles.icon} />
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
  icon: {
    width: 25,
    height: 25,
    tintColor: colors.appColor,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: colors.appColor,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: colors.appColor,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default AppHeaders;
