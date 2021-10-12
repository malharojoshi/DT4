import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CalenderScreen from './CalenderScreen';
import GoToDateScreen from './GoToDateScreen';
import SettingScreen from './SettingScreen';
const Stack = createStackNavigator();

// function ProfileScreen() {
const ProfileScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CalenderScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CalenderScreen" component={CalenderScreen} />
        <Stack.Screen name="GoToDateScreen" component={GoToDateScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// }

export default ProfileScreen;
