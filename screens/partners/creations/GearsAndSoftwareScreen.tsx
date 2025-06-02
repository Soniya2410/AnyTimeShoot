import React, {useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
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
  {label: constant.cameraGears, icon: images.cameraIcon, route: 'cameraGear'},
  {label: constant.videoCameraGears, icon: images.videoIcon, route: 'cameraGear'},
  {label: constant.mobilePhoneCamera, icon: images.mobileIcon, route: 'mobilePhoneCamera'},
  {label: constant.drone, icon: images.droneIcon, route: 'drone'},
  {label: constant.lightsReflectors, icon: images.lightsIcon, route: 'lightReflector'},
  {label: constant.otherAccessories, icon: images.otherAccessoriesIcon, route: 'accessories'},
  {label: constant.softwareDetails, icon: images.sotwareIcon, route: 'softwareUsed'},
];

const GearsAndSoftwareScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'gearAndSoftware'>>();

  const handleCategoryPress = useCallback((route: string) => {
    navigation.navigate(route as any);
  }, [navigation]);

  const renderCategoryItem = ({item}: {item: typeof categories[0]}) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCategoryPress(item.route)}>
      <View style={{ width: '95%'}}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.cardText}>{item.label}</Text>
      </View>
      <View style={{ justifyContent: 'center'}}>
        <Image source={images.rightIcon} style={styles.nextIcon} />
       </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollContent}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>{constant.gearsAndSoftwares}</Text>
            <Text style={styles.subtitle}>{constant.mentionDevies}</Text>
          </>
        }
        renderItem={renderCategoryItem}
      />

      <View style={styles.footer}>
        <ASButton title={constant.continue} onPress={() => console.log('Continue pressed')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    flexDirection: 'row'
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
  nextIcon: {
    width: 17,
    height: 17,
    justifyContent:'center',
    alignItems: 'center'
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    backgroundColor: colors.white,
  },
});

export default GearsAndSoftwareScreen;
