import React from 'react';
import {Text, View, Button} from 'react-native';
import {CompanyData} from './components/CompanyData';

// const name = 'Ali';
// let age = 20;
// let email = 'abc@gmail.com';

const App = () => {
  let data = 100;
  function fruit(val) {
    data = 20;
    console.warn(data);
  }

  return (
    <View>
      <Text style={{fontSize: 30}}>{data}</Text>
      <Button title="On Press" onPress={() => fruit(40)} color={'green'} />
      <Button title="On Press" onPress={fruit} color={'red'} />
    </View>
  );
};

export default App;
