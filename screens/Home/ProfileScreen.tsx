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
      size: 20
    },
    {
      id: '2',
      title: constant.addres,
      value: '123 Anywhere st, Any City 123456',
      icon: images.locationIcon,
      size: 18
    },
    {
      id: '3',
      title: constant.whislist,
      value: constant.products,
      icon: images.whislistIcon,
      size: 18
    },
    {
      id: '4',
      title: constant.termsOfUse,
      value: constant.policy,
      icon: images.termsIcon,
      size: 30
    },
    {
      id: '5',
      title: constant.cancellationPolicy,
      value: constant.policy,
      icon: images.canPolicyIcon,
      size: 20
    },
    {
      id: '6',
      title: constant.rateUs,
      value: constant.ratings,
      icon: images.rateUsIcon,
      size: 20
    },
    {
      id: '7',
      title: constant.deleteAccount,
      value: constant.deleteEverything,
      icon: images.deleteAccountIcon,
      size: 20
    },
    {
      id: '8',
      title: constant.contactUs,
      value: constant.about,
      icon: images.contactUsIcon,
      size: 20
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {id: string; title: string; value: string; icon: any; size: number};
  }) => (
    <TouchableOpacity style={styles.settingItem}>
      {/* <View style={styles.settingLeftContainer}> */}
        <View style={styles.iconBackground}>
          <Image source={item.icon} style={styles.settingIcon} width={item.size} height={item.size}/>
        </View>
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <Text style={styles.settingValue}>{item.value}</Text>
        </View>
      {/* </View> */}
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
          {/* <View style={styles.profileInfoContainer}> */}
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
        {/* </View> */}

        <View style={styles.lineContainer}></View>

        {/* Join Partner View */}
        <TouchableOpacity style={styles.partnerContainer}>
          {/* <View style={styles.profileInfoContainer}> */}
            <View style={styles.partnerInfo}>
              <Text style={styles.joinPartner}>{constant.joinPartner}</Text>
              <Text style={styles.descText}>
                {constant.itsEasyToGet}
                <Text style={styles.highlight}>{constant.shoot}</Text>
              </Text>
            </View>
            {/* <TouchableOpacity style={styles.profileTopImageContainer}> */}
              <Image
                source={images.profileTopImage}
                style={styles.profileTopImage}
              />
            {/* </TouchableOpacity> */}
          {/* </View> */}
        </TouchableOpacity>

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
            title={constant.editProfile}
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
    marginBottom: 20,
  },
  profileImage: {
    width: 57,
    height: 57,
    borderRadius: 40,
    marginRight: 5,
  },
  profileInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    // flex: 1,
    width: '70%',
    marginLeft: 10,
  },
  partnerInfo: {
    // flex: 1,
    width: '45%',
    marginHorizontal: 10,
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
    fontFamily: Fonts.regular,
    // marginBottom: 5,
  },
  email: {
    fontSize: 12,
    color: '#666',
    fontFamily: Fonts.light,
  },
  rightArrow: {
    height: 19,
    width: 19,
  },
  arrowContainer: {
    marginLeft: 10,
  },
  profileTopImageContainer: {
    marginLeft: 11,
  },
  lineContainer: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lineColor,
  },
  partnerContainer: {
    marginVertical: 20,
    // width: '100%',
    height: '12%',
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 14,
    shadowColor: colors.appColor,
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    // width: '50%',
    // marginHorizontal: 20,
    height: 95,
    marginRight: 20,
  },
  joinPartner: {
    fontSize: 16,
    // marginBottom: 5,
    // marginRight: 11,
    fontFamily: Fonts.medium,
  },
  descText: {
    fontSize: 10,
    marginRight: 10,
    marginVertical: 5,
    fontFamily: Fonts.regular,
    color: colors.black,
    lineHeight: 17,
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
    marginVertical: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  settingTextContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  // settingLeftContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   flex: 1,
  // },
  settingTitle: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: colors.black,
    marginBottom: 5,
  },
  settingValue: {
    fontSize: 10,
    fontFamily: Fonts.regular,
    color: '#666',
  },
  settingIcon: {
    // padding: 2,
    tintColor: colors.appColor,
  },
  iconBackground: {
    width: 40,
    height: 35,
    borderRadius: 3,
    backgroundColor: colors.appLightColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    // marginRight: 15,
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
    marginTop: 20,
    width: '70%',
    textAlign: 'center',
  },
  editButtonContainer: {
    alignItems: 'center',
    // marginTop: 10,
  },
});

export default ProfileScreen;
