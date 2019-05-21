import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

export default class TicketScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      issue: '',
      suggested: '',
      
    };
  }
  
  render() {  
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Action Request Form</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.field}>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter Name'
              onChangeText={ (name) => this.setState({name}) }
              value={this.state.name}
            />
          </View>
          <View style={styles.field}>
            <Text>Issue:</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter issue explination'
              multiline={true}
              onChangeText={ (issue) => this.setState({issue}) }
              value={this.state.issue}
            />
          </View>
          <View style={styles.field}>
            <Text>Suggested Action:</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter issue explination'
              multiline={true}
              onChangeText={ (suggested) => this.setState({suggested}) }
              value={this.state.suggested}
            />
          </View>
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
  headerContainer: {
    
  },
  header: {
    fontSize: 30
  },
  form: {
    
  },
  input: {
    padding: 3,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'gray',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  }
});