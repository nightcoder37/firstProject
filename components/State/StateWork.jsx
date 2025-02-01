import React, {useState} from 'react';
import {exStyles} from './style';
import {
  Button,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';

const StateWork = () => {
  const [text, setText] = useState('Lahore');

  function pressHere() {
    setText('');
  }
  const theme = useColorScheme();

  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={exStyles.mainView}>
      {/* <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello State {text}
      </Text> */}
      {/* <Text style={{fontSize: 30}}>Hello </Text>
      <Text style={exStyles.textwork}>Hello {text}</Text>
      <TextInput
        style={exStyles.textIn}
        placeholder="Enter Value"
        value={text}
        onChangeText={text => setText(text)}></TextInput>

      <Image
        source={require('../../assets/images/medium.jpg')}
        style={{
          width: 370,
          height: 380,
          marginRight: 40,
          overflow: 'hidden',
          objectFit: 'cover',
        }}
      />

      <Pressable
        style={({pressed}) => [
          exStyles.button1,
          {backgroundColor: pressed ? '#3e8e41' : '#4CAF50'},
        ]}
        onPress={pressHere}>
        <Text style={exStyles.buttonText}>Clear Field</Text>
      </Pressable> */}
    </View>
  );
};

export default StateWork;
