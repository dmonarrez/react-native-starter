import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TicketScreen from './screens/TicketScreen';
import ListScreen from './screens/ListScreen';

export default class App extends React.Component {
  
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Ticket: {screen: TicketScreen},
  List: {screen: ListScreen}
})

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange'
    }
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: {screen: HomeScreen},
  Ticket: {screen: TicketScreen}
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange'
    }
  }
});

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: 'gray',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  }
});