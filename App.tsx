import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

// Screens
import HomeScreen from './screens/Home/HomeScreen';
import ProfileScreen from './screens/Home/ProfileScreen';
import CategoryScreen from './screens/Home/CategoryScreen';
import MyBookingsScreen from './screens/Home/MyBookingsScreen';
import {images} from './screens/utils/Images';
import {colors} from './screens/utils/Colors';

// Onboarding Screens
import OnboardScreen from './screens/Home/OnboardScreen';
import LoginScreen from './screens/Home/LoginScreen';
import OnboardSlider from './screens/Home/components/OnboardSlider';
import OTPSCreen from './screens/Home/OTPScreen';
import SuccessScreen from './screens/Home/SuccessScreen';
import SignInScreen from './screens/Home/SignInScreen';
import MessageScreen from './screens/Home/MessageScreen';
import BookingListScreen from './screens/Home/BookingListScreen';
import BookingDetailScreen from './screens/Home/BookingDetailScreen.tsx';
import { icons } from './screens/utils/Icons.tsx';
import CouponScreen from './screens/Home/CouponScreen.tsx';

export type RootStackParamList = {
  onboard: undefined;
  onboardSlider: undefined;
  login: undefined;
  homeScreen: undefined;
  otpScreen: {phoneNumber: string, countryCode: string};
  successScreen: undefined;
  signIn: undefined;
  coupon: undefined;
  yourLocationPopUp: undefined;
  bookingList: undefined;
  bookingDetails: undefined;
  couponScreen: undefined;
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
        options={{headerShown: false,}}
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
            <TouchableOpacity style={{marginRight: 15, width: 24, height: 24}} onPress={() => {}}>
              <Image
                source={icons.shareIcon}
                style={{width: 18, height: 20}}
              />
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
        <Stack.Navigator initialRouteName="onboard"
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

          {/* <Stack.Screen
            name="yourLocationPopUp"
            component={YourLocationPopupScreen}
            options={{
              title: '',
              headerShown: false,
            }}
          /> */}

          <Stack.Screen
            name='bookingList'
            component={BookingListScreen}
            options={{
              headerTitle: 'Bookings',
              headerTitleAlign: 'left',
              headerBackTitle: ''
              
            }}
          />

          <Stack.Screen
          name='bookingDetails'
          component={BookingDetailScreen}
          options={{
            headerTitle: 'Bookings',
            headerTitleAlign: 'left',
            headerBackTitle: ''
          }}
          />
            <Stack.Screen
            name='couponScreen'
            component={CouponScreen}
            options={{
            headerTitle: 'Coupons',
            headerTitleAlign: 'left',
            headerBackTitle: ''
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
