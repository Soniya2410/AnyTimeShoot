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
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

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

type RootStackParamList = {
  onboard: undefined;
  onboardSlider: undefined;
  login: undefined;
  homeScreen: undefined;
  otpScreen: undefined;
  successScreen: undefined;
  signIn: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('screen');

const BottomTabs: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused}) => {
              let iconSource;
              switch (route.name) {
                case 'Home':
                  iconSource = images.home;
                  break;
                case 'Category':
                  iconSource = images.category;
                  break;
                case 'My Bookings':
                  iconSource = images.myBookings;
                  break;
                case 'Profile':
                  iconSource = images.profile;
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
              const {onPress, onLongPress, accessibilityState, children} =
                props;
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
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Category" component={CategoryScreen} />
          <Tab.Screen name="My Bookings" component={MyBookingsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="onboard">
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
            options={{title: '', headerShown: false}}
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
