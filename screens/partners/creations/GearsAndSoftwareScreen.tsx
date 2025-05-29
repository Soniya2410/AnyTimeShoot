import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {ASButton} from '../../components/ASButton';
import {images} from '../../utils/Images';
import {constant} from '../../utils/Constant';
import {RootStackNavigationProp} from '../../../App';

const categories = [
  {label: constant.cameraGears, icon: images.cameraIcon},
  {label: constant.videoCameraGears, icon: images.videoIcon},
  {label: constant.mobilePhoneCamera, icon: images.mobileIcon},
  {label: constant.drone, icon: images.droneIcon},
  {label: constant.lightsReflectors, icon: images.lightsIcon},
  {label: constant.otherAccessories, icon: images.otherAccessoriesIcon},
  {label: constant.softwareDetails, icon: images.sotwareIcon},
];

const GearsAndSoftwareScreen: React.FC = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<'gearAndSoftware'>>();

  const handleCategoryPress = (label: string) => {
  console.log('Pressed:', label);
  switch (label) {
    case constant.cameraGears:
      navigation.navigate('cameraGear');
      break;
    case constant.videoCameraGears:
      navigation.navigate('cameraGear');
      break;
    case constant.mobilePhoneCamera:
      navigation.navigate('mobilePhoneCamera');
      break;
    case constant.drone:
      navigation.navigate('drone');
      break;
    case constant.lightsReflectors:
      navigation.navigate('lightReflector');
      break;
    case constant.otherAccessories:
      navigation.navigate('accessories');
      break;
    case constant.softwareDetails:
      navigation.navigate('softwareUsed');
      break;
    default:
      console.log('No matching category found');
  }
};
  const moveToNavigation = () => {
    navigation.navigate('cameraGear');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{constant.gearsAndSoftwares}</Text>
        <Text style={styles.subtitle}>{constant.mentionDevies}</Text>

        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleCategoryPress(item.label)}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>{item.label}</Text>
              <Image
                source={images.rightIcon}
                resizeMethod="resize"
                style={styles.nextIcon}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <ASButton
          title={constant.continue}
          onPress={() => console.log('Continue pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.appColor,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: colors.white,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textPrimary2,
    marginBottom: 16,
  },
  card: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColors,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 12,
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  nextIcon: {
    width: 12,
    height: 12,
  },
});

export default GearsAndSoftwareScreen;
