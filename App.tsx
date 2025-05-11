import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

// Screens
import HomeScreen from './screens/Home/HomeScreen';
import ProfileScreen from './screens/profile/ProfileScreen.tsx';
import CategoryScreen from './screens/Home/CategoryScreen';
import MyBookingsScreen from './screens/Home/MyBookingsScreen.tsx';
import {images} from './screens/utils/Images';
import {colors} from './screens/utils/Colors';

// Onboarding Screens
import OnboardScreen from './screens/Home/OnboardScreen';
import LoginScreen from './screens/Home/LoginScreen';
import OnboardSlider from './screens/components/OnboardSlider';
import OTPSCreen from './screens/Home/OTPScreen';
import SuccessScreen from './screens/Home/SuccessScreen';
import SignInScreen from './screens/Home/SignInScreen';
import MessageScreen from './screens/Home/MessageScreen';
import BookingListScreen from './screens/booking/BookingListScreen';
import {icons} from './screens/utils/Icons.tsx';
import CouponScreen from './screens/Home/CouponScreen.tsx';
import CancelledBookingScreen from './screens/booking/CancelledBookingScreen.tsx';
import NoBookingScreen from './screens/booking/NoBookingScreen.tsx';
import SuccessPopupCreationSccreen from './screens/creations/SuccessPopupCreationScreen.tsx';
import CompletedBookingDetailScreen from './screens/booking/CompletedBookingDetailScreen.tsx';
import UpcomingBookingDetailScreen from './screens/booking/UpcomingBookingDetailScreen.tsx';
import UpcomingShootStartedScreen from './screens/booking/UpcomingShootStartedScreen.tsx';
import UpcomingShootCompletedScreen from './screens/booking/UpcomingShootCompletedScreen.tsx';
import UpcomingEditingInprogressScreen from './screens/booking/UpcomingEditingInprogressScreen.tsx';
import ProfileDetailScreen from './screens/profile/ProfileDetailScreen.tsx';
import PackageList from './screens/Home/PackageList.tsx';
import PackageDetails from './screens/booking/PackageDetails.tsx';
import {constant} from './screens/utils/Constant.tsx';
import ReviewsScreen from './screens/Home/ReviewsScreen.tsx';
import BookingDetailScreen from './screens/Home/BookingDetailScreen.tsx';
import PackageCreationScreen from './screens/creations/PackageCreationScreen.tsx';
import NotificationScreen from './screens/Home/NotificationScreen.tsx';
import WishlistScreen from './screens/Home/WishlistScreen.tsx';
import ChooseCategoryPackage from './screens/booking/creations/ChooseCategoryPackage.tsx';
import AddDetailsPackageScreen from './screens/booking/creations/AddDetailsPackageScreen.tsx';
import AddStudioDetailsPackageScreen from './screens/booking/creations/AddStudioDetailsPackageScreen.tsx';

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
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="homeScreen"
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
                  onPress={() => {}}
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
                  onPress={() => {}}
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
                  onPress={() => {}}
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
                  onPress={() => {}}
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
            options={{
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="completedDetail"
            component={CompletedBookingDetailScreen}
            options={{
              headerTitle: '',
            }}
          />

          {/* <Stack.Screen
            name='completedPopup'
            component={CompletedPopupScreen}
            options={{
              headerTitle: '',
            }}
          /> */}

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
              headerTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,

              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {}}
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
              headerTitle: 'Package Creation',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,

              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {}}
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
              headerBackTitle: '',
              headerTitle: 'Notification',
            }}
          />
          <Stack.Screen
            name="wishlist"
            component={WishlistScreen}
            options={{
              headerBackTitle: '',
              headerTitle: 'WishList',
            }}
          />

          <Stack.Screen
            name="addDetailsPackage"
            component={AddDetailsPackageScreen}
            options={{
              headerTitle: 'Package Creation',
              headerTitleAlign: 'left',
              headerBackTitle: '',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {}}
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
              headerTitle: 'Package Creation',
              headerTitleAlign: 'left',
              headerBackTitle: '',
              headerBackground: () => (
                <View style={{backgroundColor: colors.appColor, flex: 1}} />
              ),
              headerTitleStyle: {
                color: colors.white,
              },
              headerTintColor: colors.white,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {}}
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
