import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

export default class TicketScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'placeholder text'};
  }
  
  render() {  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Action Request Form</Text>
        </View>
        <View style={styles.form}>
          <Text>Name:</Text>
          <TextInput
            onChangeText={ (text) => this.setState({text}) }
            value={this.state.text}
          />
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
    padding: 40,
  },
  header: {
    
  },
  form: {
    
  },
  button: {
    backgroundColor: 'gray',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  }
});