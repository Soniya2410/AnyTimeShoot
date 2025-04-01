import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {images} from '../utils/Images';
import {colors} from '../utils/Colors';
import {constant} from '../utils/Constant';
import {Fonts} from '../utils/Fonts';
import {ASButton} from './components/ASButton';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../App';

const ProfileScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp<'login'>>();

  const moveToEditProfile = () => {};
  const settingsData = [
    {
      id: '1',
      title: constant.profilePhoneNumber,
      value: '+91 456 435 7689',
      icon: images.phoneIcon,
    },
    {
      id: '2',
      title: constant.addres,
      value: '123 Anywhere st, Any City 123456',
      icon: images.locationIcon,
    },
    {
      id: '3',
      title: constant.whislist,
      value: constant.products,
      icon: images.whislistIcon,
    },
    {
      id: '4',
      title: constant.termsOfUse,
      value: constant.policy,
      icon: images.termsIcon,
    },
    {
      id: '5',
      title: constant.cancellationPolicy,
      value: constant.policy,
      icon: images.canPolicyIcon,
    },
    {
      id: '6',
      title: constant.rateUs,
      value: constant.ratings,
      icon: images.rateUsIcon,
    },
    {
      id: '7',
      title: constant.deleteAccount,
      value: constant.deleteEverything,
      icon: images.deleteAccountIcon,
    },
    {
      id: '8',
      title: constant.contactUs,
      value: constant.about,
      icon: images.contactUsIcon,
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {id: string; title: string; value: string; icon: any};
  }) => (
    <TouchableOpacity style={styles.settingItem}>
      <View style={styles.settingLeftContainer}>
        <View style={styles.iconBackground}>
          <Image source={item.icon} style={styles.settingIcon} />
        </View>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <Text style={styles.settingValue}>{item.value}</Text>
        </View>
      </View>
      {item.title === constant.profilePhoneNumber ||
      item.title === constant.addres ? (
        <TouchableOpacity>
          <Image
            source={images.editProfileIcon}
            style={[styles.rightArrow, {tintColor: colors.appColor}]}
          />
        </TouchableOpacity>
      ) : (
        <Image source={images.rightAppNextArrow} style={styles.rightArrow} />
      )}
    </TouchableOpacity>
  );
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image source={images.profileImage} style={styles.profileImage} />
          <View style={styles.profileInfoContainer}>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Harshit Rana</Text>
              <Text style={styles.email}>harshit@gmail.com</Text>
            </View>
            <TouchableOpacity style={styles.arrowContainer}>
              <Image
                source={images.rightAppNextArrow}
                style={styles.rightArrow}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lineContainer}></View>

        {/* Join Partner View */}
        <View style={styles.partnerContainer}>
          <View style={styles.profileInfoContainer}>
            <View style={styles.partnerInfo}>
              <Text style={styles.joinPartner}>{constant.joinPartner}</Text>
              <Text style={styles.descText}>
                {constant.itsEasyToGet}
                <Text style={styles.highlight}>{constant.shoot}</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.profileTopImageContainer}>
              <Image
                source={images.profileTopImage}
                style={styles.profileTopImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings FlatList */}
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsText}>{constant.settings}</Text>
          <FlatList
            data={settingsData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* Bottom Logout View */}
        <View style={styles.editButtonContainer}>
          <ASButton
            title="Edit Profile"
            customStyle={styles.editButton}
            onPress={moveToEditProfile}></ASButton>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log out ?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 57,
    height: 57,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  partnerInfo: {
    flex: 1,
    marginLeft: 10,
  },
  scrollContentContainer: {
    paddingBottom: 40,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  rightArrow: {
    height: 16,
    width: 16,
  },
  arrowContainer: {
    marginLeft: 10,
  },
  profileTopImageContainer: {
    marginLeft: 11,
  },
  lineContainer: {
    width: '100%',
    height: 2,
    backgroundColor: colors.lineColor,
  },
  partnerContainer: {
    marginTop: 23,
    width: '100%',
    height: '12%',
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 16,
    shadowColor: colors.appColor,
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  shadowContainer: {
    shadowColor: colors.appLightColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'transparent',
    marginTop: 23,
  },
  profileTopImage: {
    width: 166,
    height: 95,
  },
  joinPartner: {
    fontSize: 16,
    marginBottom: 5,
    marginRight: 11,
    fontFamily: Fonts.medium,
  },
  descText: {
    fontSize: 10,
    marginBottom: 5,
    marginRight: 11,
    fontFamily: Fonts.regular,
    color: colors.black,
  },
  highlight: {
    color: colors.appColor,
    fontFamily: Fonts.medium,
    fontSize: 10,
  },
  settingsText: {
    marginTop: 10,
    color: colors.black,
    fontSize: 18,
    fontFamily: Fonts.medium,
  },
  settingsContainer: {
    marginTop: 30,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.black,
    marginBottom: 5,
  },
  settingValue: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#666',
  },
  settingIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -8,
    marginLeft: -8,
    resizeMode: 'contain',
    tintColor: colors.appColor,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 3,
    backgroundColor: colors.appLightColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  separator: {
    height: 1,
    backgroundColor: colors.lineColor,
  },
  bottomSection: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: colors.lineColor,
    paddingTop: 20,
  },
  editProfileButton: {
    paddingVertical: 15,
  },
  editProfileText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.black,
    textAlign: 'center',
  },
  logoutButton: {
    paddingVertical: 15,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: colors.appColor,
    textAlign: 'center',
  },
  editButton: {
    borderRadius: 30,
    marginTop: 50,
    width: '70%',
    textAlign: 'center',
  },
  editButtonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
});

export default ProfileScreen;
