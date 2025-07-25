import React, { useCallback } from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

// Screens
import HomeScreen from './screens/home/HomeScreen.tsx';
import ProfileScreen from './screens/profile/ProfileScreen.tsx';
import CategoryScreen from './screens/home/CategoryScreen.tsx';
import MyBookingsScreen from './screens/home/MyBookingsScreen.tsx';
import {images} from './screens/utils/Images';
import {colors} from './screens/utils/Colors';

// Onboarding Screens
import OnboardScreen from './screens/auth/OnboardScreen.tsx';
import LoginScreen from './screens/auth/LoginScreen.tsx';
import OnboardSlider from './screens/components/OnboardSlider';
import OTPSCreen from './screens/auth/OTPScreen.tsx';
import SuccessScreen from './screens/home/SuccessScreen.tsx';
import SignInScreen from './screens/auth/SignInScreen.tsx';
import MessageScreen from './screens/home/MessageScreen.tsx';
import BookingListScreen from './screens/booking/BookingListScreen';
import {icons} from './screens/utils/Icons.tsx';
import CouponScreen from './screens/home/CouponScreen.tsx';
import CancelledBookingScreen from './screens/booking/CancelledBookingScreen.tsx';
import NoBookingScreen from './screens/booking/NoBookingScreen.tsx';
import SuccessPopupCreationSccreen from './screens/partners/creations/SuccessPopupCreationScreen.tsx';
import CompletedBookingDetailScreen from './screens/booking/CompletedBookingDetailScreen.tsx';
import UpcomingBookingDetailScreen from './screens/booking/UpcomingBookingDetailScreen.tsx';
import UpcomingShootStartedScreen from './screens/booking/UpcomingShootStartedScreen.tsx';
import UpcomingShootCompletedScreen from './screens/booking/UpcomingShootCompletedScreen.tsx';
import UpcomingEditingInprogressScreen from './screens/booking/UpcomingEditingInprogressScreen.tsx';
import ProfileDetailScreen from './screens/profile/ProfileDetailScreen.tsx';
import PackageList from './screens/home/PackageList.tsx';
import PackageDetails from './screens/booking/PackageDetails.tsx';
import {constant} from './screens/utils/Constant.tsx';
import ReviewsScreen from './screens/home/ReviewsScreen.tsx';
import BookingDetailScreen from './screens/home/BookingDetailScreen.tsx';
import PackageCreationScreen from './screens/partners/creations/PackageCreationScreen.tsx';
import NotificationScreen from './screens/home/NotificationScreen.tsx';
import WishlistScreen from './screens/home/WishlistScreen.tsx';
import ChooseCategoryPackage from './screens/partners/creations/ChooseCategoryPackage.tsx';
import AddDetailsPackageScreen from './screens/partners/creations/AddDetailsPackageScreen.tsx';
import AddStudioDetailsPackageScreen from './screens/partners/creations/AddStudioDetailsPackageScreen.tsx';
import AddDeliveryDetailScreen from './screens/partners/creations/AddDeliveryDetailScreen.tsx';
import PricingDetailPackageScreen from './screens/partners/creations/PricingDetailPackageScreen.tsx';
import AddRulesPackageScreen from './screens/partners/creations/AddRulesPackageScreen.tsx';
import AdditionalInformationPackageScreen from './screens/partners/creations/AdditionInfomationPackageScreen.tsx';
import ExtraPerksPackageScreen from './screens/partners/creations/ExtraPerksPackageScreen.tsx';
import AddSamplePackageScreen from './screens/partners/creations/AddSamplePackageScreen.tsx';
import DeliverableDetailScreen from './screens/partners/creations/DeliverablePackageScreen.tsx';
import TermsOfUseScreen from './screens/profile/TermsOfUseScreen.tsx';
import CancellationPolicyScreen from './screens/profile/CancellationPolicyScreen.tsx';
import ContactUsScreen from './screens/profile/ContactUsScreen.tsx';
import PartnerOnboardingScreen from './screens/partners/onboarding/PartnerOnBoardingScreen.tsx';
import PartnerRegistrationScreen from './screens/partners/onboarding/PartnerRegistrationScreen.tsx';
import PackageCreationSuccessScreen from './screens/partners/onboarding/PackageCreationSuccess.tsx';
import PartnerOTPScreen from './screens/partners/onboarding/PartnerOTPScreen.tsx';
import PartnerOTPVerificationScreen from './screens/partners/onboarding/PartnerOTPVerificationScreen.tsx';
import {FilterBottomSheet} from './screens/partners/creations/FilterBottomSheet.tsx';
import BookingTypeScreen from './screens/booking/BookingTypeScreen.tsx';

// Devices
import GearsAndSoftwareScreen from './screens/partners/creations/GearsAndSoftwareScreen.tsx';
import CameraGearsScreen from './screens/partners/creations/CameraGearsScreen.tsx';
import MobilePhoneCameraScreen from './screens/partners/creations/MobilePhoneCameraScreen.tsx';
import DroneScreen from './screens/partners/creations/DroneScreen.tsx';
import LightsReflectorScreen from './screens/partners/creations/LightsReflectorScreen.tsx';
import AccessoriesScreen from './screens/partners/creations/AccessoriesScreen.tsx';
import SoftwareUsedScreen from './screens/partners/creations/SoftwareUsedScreen.tsx';
import SearchScreen from './screens/home/SearchScreen.tsx';
import CategoryList from './screens/home/components/CategoryList.tsx';
import OurPartnersList from './screens/home/components/OurPartnersList.tsx';
import PartnerDashBoard from './screens/partners/onboarding/PartnerDashboard.tsx';

export type RootStackParamList = {
  onboard: undefined;
  onboardSlider: undefined;
  login: undefined;
  homeScreen: undefined;
  otpScreen: {phoneNumber: string; countryCode: string};
  successScreen: undefined;
  signIn: undefined;
  coupon: undefined;
  yourLocationPopUp: undefined;
  bookingList: {item: unknown};
  upcomingbookingDetails: undefined;
  upcomingPopup: undefined;
  upcomingStartShoot: undefined;
  upcomingShootCompleted: undefined;
  upcomingEditingInprogress: undefined;
  couponScreen: undefined;
  cancelledScreen: undefined;
  noBookingScreen: undefined;
  successCreation: undefined;
  completedDetail: undefined;
  // completedPopup: undefined;
  packageList: {title: string; data: any[]};
  packageDetail: {title: string};
  profileDetail: undefined;
  reviewScreen: undefined;
  bookingDetail: undefined;
  packageCreation: undefined;
  notificationList: undefined;
  wishlist: undefined;
  chooseCategoryCreation: undefined;
  addDetailsPackage: undefined;
  addStudioDetailsPackage: undefined;
  addDeliveryDetailsPackage: undefined;
  pricingDetailPackage: undefined;
  addRulesPackage: undefined;
  additionalInformationPackage: undefined;
  extraPerksPackage: undefined;
  addSamplePackage: undefined;
  deliverablePackage: undefined;
  contactUs: undefined;
  cancellationPolicy: undefined;
  termsOfUse: undefined;
  partnersOnboarding: undefined;
  partnerRegister: {from: string};
  packageCreationSuccess: undefined;
  partnerOTPScreen: undefined;
  partnerOTPVerify: {selectionOption: string};
  cameraGear: undefined;
  gearAndSoftware: undefined;
  mobilePhoneCamera: undefined;
  drone: undefined;
  lightReflector: undefined;
  softwareUsed: undefined;
  accessories: undefined;
  filterBottom: undefined;
  searchScreen: undefined;
  bookingType: undefined;
  categoryList: undefined;
  ourPartners: undefined;
  partnerDashBoard: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('screen');

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        headerTitleAlign: 'left',
        headerStyle: {
          shadowOpacity: 0,
          paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 10,
        },
        headerLeft: () => (
          <TouchableOpacity style={{marginLeft: 15}}></TouchableOpacity>
        ),
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 10,
        },
        tabBarIcon: ({focused}) => {
          let iconSource;
          switch (route.name) {
            case 'Home':
              iconSource = icons.homeActiveIcon;
              break;
            case 'Message':
              iconSource = icons.messageActiveIcon;
              break;
            case 'Bookings':
              iconSource = icons.myBookingsActiveIcon;
              break;
            case 'Profile':
              iconSource = icons.profileActiveIcon;
              break;
          }
          return (
            <Image
              source={iconSource}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.appColor : 'gray',
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: colors.appColor,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 12, fontWeight: '500', marginTop: 2},
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 60,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
        },
        tabBarButton: props => {
          const {onPress, onLongPress, accessibilityState, children} = props;
          return (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.8}
              style={{flex: 1, position: 'relative'}}>
              {accessibilityState?.selected && (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    backgroundColor: colors.appColor,
                  }}
                />
              )}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {children}
              </View>
            </TouchableOpacity>
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Bookings" component={MyBookingsScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 15, width: 24, height: 24}}
              onPress={() => {}}>
              <Image source={icons.shareIcon} style={{width: 18, height: 20}} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const App: React.FC = () => {
  const handleSelectBookingType = (type: 'instant' | 'advance') => {
    console.log('Selected booking type:', type);
    // Navigate to appropriate screen or perform action
  };


  const callHelpCenter = useCallback(() => {
    Linking.openURL(constant.helpCenter)
  },[])

const callCustomChat = useCallback(() => {
 
}, []);
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="onboard"
          screenOptions={{
            headerBackTitle: '', // This works differently in native-stack
            headerTintColor: '#000000', // Arrow color
          }}>
          <Stack.Screen
            name="onboard"
            component={OnboardScreen}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="onboardSlider"
            component={OnboardSlider}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="homeScreen"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="otpScreen"
            component={OTPSCreen}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="successScreen"
            component={SuccessScreen}
            options={{
              title: '',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signIn"
            component={SignInScreen}
            options={{
              title: '',
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="bookingList"
            component={BookingListScreen}
            options={{
              headerTitle: 'Bookings',
              headerTitleAlign: 'left',
              headerBackTitle: '',
            }}
          />

          <Stack.Screen
            name="packageList"
            component={PackageList}
            options={{
              headerBackTitle: '',
            }}
          />

          <Stack.Screen
            name="packageDetail"
            component={PackageDetails}
            options={{
              headerBackTitle: '',
              headerTitle: 'Package Details',
            }}
          />

          <Stack.Screen
            name="upcomingbookingDetails"
            component={UpcomingBookingDetailScreen}
            options={{
              headerTitle: 'Bookings',
              headerTitleAlign: 'left',
              headerBackTitle: '',
              headerRight: () => (
                <TouchableOpacity
                  onPress={callCustomChat}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.black,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.black}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="upcomingStartShoot"
            component={UpcomingShootStartedScreen}
            options={{
              headerTitle: 'Bookings',
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.black,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.black}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="upcomingShootCompleted"
            component={UpcomingShootCompletedScreen}
            options={{
              headerTitle: 'Bookings',
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.black,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.black}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="upcomingEditingInprogress"
            component={UpcomingEditingInprogressScreen}
            options={{
              headerTitle: 'Bookings',
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.black,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.black}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="couponScreen"
            component={CouponScreen}
            options={{
              headerTitle: 'Coupons',
              headerTitleAlign: 'left',
              headerBackTitle: '',
            }}
          />

          <Stack.Screen
            name="cancelledScreen"
            component={CancelledBookingScreen}
            options={{
              headerTitle: 'Bookings',
              headerTitleAlign: 'left',
              headerBackTitle: '',
            }}
          />

          <Stack.Screen
            name="noBookingScreen"
            component={NoBookingScreen}
            options={{
              headerTitle: 'Bookings',
              headerTitleAlign: 'left',
              headerBackTitle: '',
            }}
          />

          <Stack.Screen
            name="successCreation"
            component={SuccessPopupCreationSccreen}
            options={{title: '', headerShown: false}}
          />

          <Stack.Screen
            name="completedDetail"
            component={CompletedBookingDetailScreen}
            options={{
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name='categoryList'
            component={CategoryList}
            options={{
              headerShown: true,
              headerTitleAlign: 'left',
              headerTitle: 'Categories',
            }}
          />

        <Stack.Screen
            name='ourPartners'
            component={OurPartnersList}
            options={{
              headerShown: true,
              headerTitleAlign: 'left',
              headerTitle: 'Our Partners',
            }}
          />

          <Stack.Screen
            name="profileDetail"
            component={ProfileDetailScreen}
            options={{
              headerShown: true,
              headerTitleAlign: 'left',
              headerTitle: 'Profile',
              // headerTitleStyle: {
              //   fontSize: 20,
              //   fontWeight: 'bold',
              // },
              // headerLeft: () => (
              //   <TouchableOpacity style={{marginLeft: 20}}></TouchableOpacity>
              // ),
              headerRight: () => (
                <TouchableOpacity
                  style={{marginRight: 15, width: 24, height: 24}}
                  onPress={() => {}}>
                  <Image
                    source={icons.shareIcon}
                    style={{width: 18, height: 20}}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="reviewScreen"
            component={ReviewsScreen}
            options={{
              headerShown: true,
              headerTitle: 'Review',
            }}
          />

          <Stack.Screen
            name="bookingDetail"
            component={BookingDetailScreen}
            options={{
              headerShown: true,
              headerTitleAlign: 'left',
              headerTitle: 'Booking Detail',
              // headerTitleStyle: {
              //   fontSize: 20,
              //   fontWeight: 'bold',
              // },
              // headerLeft: () => (
              //   <TouchableOpacity style={{marginLeft: 20}}></TouchableOpacity>
              // ),
              headerRight: () => (
                <View style={{flexDirection: 'row', marginRight: 0}}>
                  <TouchableOpacity
                    style={{marginRight: 15, width: 24, height: 24}}
                    onPress={() => {}}>
                    <Image
                      source={icons.bookmarkIcon}
                      style={{width: 18, height: 20}}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{marginRight: 0, width: 24, height: 24}}
                    onPress={() => {}}>
                    <Image
                      source={icons.shareIcon}
                      style={{width: 18, height: 20}}
                    />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />

          <Stack.Screen
            name="packageCreation"
            component={PackageCreationScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,

              headerRight: () => (
                <TouchableOpacity
                   onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                      tintColor: colors.white,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="chooseCategoryCreation"
            component={ChooseCategoryPackage}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,

              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                      tintColor: colors.white,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="notificationList"
            component={NotificationScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Notification',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
            }}
          />
          <Stack.Screen
            name="wishlist"
            component={WishlistScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Wishlist',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
            }}
          />

          <Stack.Screen
            name="addDetailsPackage"
            component={AddDetailsPackageScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                   onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="addStudioDetailsPackage"
            component={AddStudioDetailsPackageScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="addDeliveryDetailsPackage"
            component={AddDeliveryDetailScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="pricingDetailPackage"
            component={PricingDetailPackageScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="addRulesPackage"
            component={AddRulesPackageScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="additionalInformationPackage"
            component={AdditionalInformationPackageScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="extraPerksPackage"
            component={ExtraPerksPackageScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                   onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="addSamplePackage"
            component={AddSamplePackageScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,

              headerRight: () => (
                <TouchableOpacity
                   onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                      tintColor: colors.white,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="deliverablePackage"
            component={DeliverableDetailScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                   onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="contactUs"
            component={ContactUsScreen}
            options={{
              headerBackTitle: '',
              headerTitle: 'Contact Us',
            }}
          />
          <Stack.Screen
            name="termsOfUse"
            component={TermsOfUseScreen}
            options={{
              headerBackTitle: '',
              headerTitle: 'Terms Of Use',
            }}
          />
          <Stack.Screen
            name="cancellationPolicy"
            component={CancellationPolicyScreen}
            options={{
              headerBackTitle: '',
              headerTitle: 'Cancellation Policy',
            }}
          />
          <Stack.Screen
            name="partnersOnboarding"
            component={PartnerOnboardingScreen}
            options={{title: '', headerShown: false}}
          />

          <Stack.Screen
            name="partnerRegister"
            component={PartnerRegistrationScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'AnyTimeShoot',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                   onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="packageCreationSuccess"
            component={PackageCreationSuccessScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'AnyTimeShoot',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                   onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="partnerOTPScreen"
            component={PartnerOTPScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'AnyTimeShoot',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                   onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="partnerOTPVerify"
            component={PartnerOTPVerificationScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'AnyTimeShoot',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="gearAndSoftware"
            component={GearsAndSoftwareScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="cameraGear"
            component={CameraGearsScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="mobilePhoneCamera"
            component={MobilePhoneCameraScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="drone"
            component={DroneScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="lightReflector"
            component={LightsReflectorScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="accessories"
            component={AccessoriesScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="softwareUsed"
            component={SoftwareUsedScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="searchScreen"
            component={SearchScreen}
            options={{
              headerTitle: '',
              headerTitleAlign: 'left',
              headerBackTitle: 'Search',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpLightIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.white}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="bookingType"
            options={{
              headerTitle: 'AnyTimeShoot',
              headerTitleAlign: 'left',
              headerBackTitle: '',
            }}>
            {props => (
              <BookingTypeScreen
                {...props}
                onSelect={type => {
                  console.log('Selected type:', type);
                  // props.navigation.navigate('SomeOtherScreen', { type });
                }}
                onCreatePackage={() => {
                  console.log('Create Package tapped');
                  // props.navigation.navigate('CreatePackage');
                }}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="partnerDashBoard"
            component={PartnerDashBoard}
           options={{
              headerTitle: 'DashBoard',
              headerRight: () => (
                <TouchableOpacity
                  onPress={callHelpCenter}
                  style={{
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: colors.black,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    marginRight: 10,
                  }}>
                  <Image
                    source={images.helpIcon}
                    style={{
                      width: 18,
                      height: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{color: colors.black}}>{constant.help}</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default App;
