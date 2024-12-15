import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
// import {CompanyData} from './components/CompanyData';

// const name = 'Ali';
// let age = 20;
// let email = 'abc@gmail.com';

const App = () => {
  const nameChange = () => {
    setName('Ali Raza');
  };
  // let data = 100;
  // function fruit(val) {
  //   data = 20;
  //   console.warn(data);
  // }
  const [name, setName] = useState('Ali');

  return (
    <View>
      {/* <Text style={{fontSize: 30}}>{data}</Text> */}
      <Text style={{fontSize: 30}}>{name}</Text>
      <Button title="Update Name" onPress={nameChange}></Button>
      {/* <Button title="On Press" onPress={() => fruit(40)} color={'green'} />
      <Button title="On Press" onPress={fruit} color={'red'} /> */}
    </View>
  );
};

export default App;
