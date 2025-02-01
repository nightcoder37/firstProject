import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetForm = () => {
    setDisplay(false);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, marginLeft: 10}}>Login Form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Name "
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Email "
        onChangeText={text => setEmail(text)}
        value={email}
      /> 
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Password "
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <View style={{marginBottom: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="Clear Details" onPress={resetForm} />

      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 20}}>UserName is : {name}</Text>
            <Text style={{fontSize: 20}}>User Email is : {email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    margin: 10,
  },
});

export default LoginForm;
