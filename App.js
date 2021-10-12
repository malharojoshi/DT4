import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens/LogInScreen'
import ProfileScreen from './screens/ProfileScreen'
import Cal from './screens/CalenderScreen'
export default class App extends React.Component {
  render(){
    return (

        <AppContainer/>

    );
  }
}

    
  


const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
ProfileScreen:{screen: ProfileScreen}
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});