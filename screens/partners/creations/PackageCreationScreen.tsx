import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../utils/Images';
import { constant } from '../../utils/Constant';
import { colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { ASButton } from '../../components/ASButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../App';

const { width } = Dimensions.get('screen');

const packages = [
  { id: 1, name: 'Studio Experts', type: 'Maternity Shoot', status: 'pending' },
  { id: 2, name: 'Studio Experts', type: 'Maternity Shoot', status: 'pending' },
  { id: 3, name: 'Studio Experts', type: 'Maternity Shoot', status: 'pending' },
  { id: 4, name: 'Studio Experts', type: 'Maternity Shoot', status: 'pending' },
  { id: 5, name: 'Studio Experts', type: 'Maternity Shoot', status: 'pending' },
];

const PackageCreationScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'packageCreation'>>();

const moveToNextScreen = () => {
 navigation.navigate('chooseCategoryCreation');
};
    const statusImages: { [key: string]: any } = {
        pending: images.pendingIcon, 
        pause: images.pauseIcon,     
        live: images.liveIcon,
    }       

    const renderStatusButton = (status: string) => {
        let backgroundColor = colors.inprogressColor;
        let label = 'Pending';
        let icon = images.pendingIcon;
      
        if (status === 'pause') {
          backgroundColor = colors.appColor;
          label = 'Pause';
          icon = images.pauseIcon;
        } else if (status === 'live') {
          backgroundColor = colors.completedColor;
          label = 'Live';
          icon = images.liveIcon;
        }

    return (
      <View style={[styles.statusButton, { backgroundColor }]}>
       <Image source={icon} style={styles.statusIcon} />
        <Text style={styles.statusText}>{label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{constant.packageVerification}</Text>
      <Text style={styles.subTitle}>
        {constant.packageSubVerification}
        <Text style={styles.highlight}>{constant.shoot}</Text>
      </Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {packages.map(pkg => (
          <View key={pkg.id} style={styles.card}>
            <Image source={images.preWedding} style={styles.image} resizeMode ='cover' />
            <View style={{ flex: 1, marginLeft: 12  }}>
              <Text style={styles.cardTitle}>{pkg.name}</Text>
              <Text style={styles.cardSubtitle}>{pkg.type}</Text>
              {renderStatusButton(pkg.status)}
            </View>
          </View>
        ))}
      </ScrollView>

      <ASButton title={constant.addPackage} onPress={moveToNextScreen} customStyle={styles.addButton}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 16,
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.textPrimary2,
    fontFamily: Fonts.light,
    fontSize: 14,
    marginLeft: 16,
  },
  highlight: {
    color: colors.appColor,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 12,
    borderColor: colors.borderColor,
    borderWidth: 1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,  
},
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  cardTitle: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.appColor,
  },
  cardSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.textPrimary2,
    marginTop: 2,
  },
  statusButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 6,
  },
  statusText: {
    color: colors.white,
    fontSize: 10,
    fontFamily: Fonts.medium,
  },
  addButton: {
    backgroundColor: colors.appColor,
    margin: 16,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    bottom: 15,
  },
  statusIcon: {
    width: 12,
    height: 12,
    marginRight: 6,
  },

});

export default PackageCreationScreen;
