import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

export default class TicketScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      issue: '',
      suggested: '',
      image: 'placeholder',
    };
  }
  
  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) { 
      this.setState({ image: uri }) 
    }
    console.log(this.state.image);
  };
  
  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    this.setState({ image: uri });
  };
  
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
              blurOnSubmit={true}
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
              blurOnSubmit={true}
              onChangeText={ (suggested) => this.setState({suggested}) }
              value={this.state.suggested}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: this.state.image}} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.button} onPress={this.selectPicture}>
                <Text>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.takePicture}>
                <Text>Camera</Text>
              </TouchableOpacity>
            </View>
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
  },
  image: {
    width: 300,
    height: 300,
    backgroundColor: 'gray',
  },
  imageContainer: {
    marginTop: 15,
    alignItems: 'center',
  }
});