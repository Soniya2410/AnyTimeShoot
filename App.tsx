import React from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

//screens
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CategoryScreen from "./screens/CategoryScreen";
import MyBookingsScreen from "./screens/MyBookingsScreen";

type RootStackParamList = {
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
                iconSource = require('./assets/images/home.png');
                break;
              case 'Category':
                iconSource = require('./assets/images/category.png');
                break;
              case 'My Bookings':
                iconSource = require('./assets/images/myBookings.png');
                break;
                case 'Profile':
                  iconSource = require('./assets/images/profile.png')
                  break;
            }
            return (
              <Image
                source={iconSource}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'gray',
                }}
                resizeMode="contain"
              />
            );
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 80 : 60,
            paddingBottom: Platform.OS === 'ios' ? 20 : 10, 
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Category" component={CategoryScreen}/>
        <Tab.Screen name="My Bookings" component={MyBookingsScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
      </Tab.Navigator>
      </SafeAreaView>
  );
};


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
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