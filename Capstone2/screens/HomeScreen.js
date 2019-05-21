import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'blue'
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Premier Pump and Power Action Request</Text>
        </View>
        <View style={styles.buttonContianer}>
          <TouchableOpacity style={styles.button} onPress={( => this.props.navigation.navigate('TicketScreen'))}>
            <Text>Create A Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>View Action Requests</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>logo place holder</Text>
        </View>
      </View>
    );
  }
}

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