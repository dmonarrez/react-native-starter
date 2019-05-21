import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Premier Pump and Power Action Request</Text>
        </View>
        <View style={styles.buttonContianer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Ticket')}>
            <Text>Create A Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('List')}>
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
  },
  header: {
    fontSize: 20
  }
});