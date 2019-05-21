import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'black'
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>list Screen place holder</Text>
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