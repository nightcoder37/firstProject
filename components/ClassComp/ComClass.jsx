import {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Student from './Student';

export default class ComClass extends Component {
  // fruit = () => {
  //   console.warn('Apple');
  // };
  constructor() {
    super();
    this.state = {
      name: 'Raza',
      age: 10,
    };
  }

  updateName(val) {
    this.setState({name: val});
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 25, color: 'red'}}>
          {this.state.name} age is {this.state.age}
        </Text>
        <TextInput
          placeholder="Enter your name"
          onChangeText={text => this.updateName(text)}
        />
        <Button title="Press Me" onPress={this.fruit} />
        <Student name={this.state.name} />
      </View>
    );
  }
}
