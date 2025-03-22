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
import {SafeAreaView} from 'react-native-safe-area-context';

//screens
import HomeScreen from './screens/Home/HomeScreen';
import ProfileScreen from './screens/Home/ProfileScreen';
import CategoryScreen from './screens/Home/CategoryScreen';
import MyBookingsScreen from './screens/Home/MyBookingsScreen';
import {images} from './screens/utils/Images';
import {colors} from './screens/utils/Colors';

//AnyTimeShoot Screens
import OnboardScreen from './screens/Home/OnboardScreen';
import LoginScreen from './screens/Home/LoginScreen';
import OnboardSlider from './screens/Home/components/OnboardSlider';

type RootStackParamList = {
  onboard: undefined;
  onboardSlider: undefined;
  login: undefined;
  homeScreen : undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('screen');

const BottomTabs: React.FC = () => {
  return (
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="My Bookings" component={MyBookingsScreen} />
        {/* <Tab.Screen name='Profile' component={ProfileScreen}/> */}
        <Tab.Screen name="OnBoard" component={OnboardScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
      <Stack.Screen
        name="onboard"
        component={OnboardScreen}
        options={{
          title: '',
        }}
      />

      <Stack.Screen
        name="onboardSlider"
        component={OnboardSlider}
        options={{
          title: '',
        }}
      />

      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="homeScreen"
        component={BottomTabs}
        options={{
          title: '',
        }}
      />
    </NavigationContainer>
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