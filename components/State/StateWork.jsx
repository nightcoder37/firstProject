import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, useColorScheme} from 'react-native';

const StateWork = () => {
  const [text, setText] = useState('Lahore');

  function pressHere() {
    setText('Sailkot');
  }
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello State {text}
      </Text>
      <Button title="Press Here" onPress={pressHere} style={styles.button1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  whiteText: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  darkText: {
    color: '#000000',
    fontSize: 30,
  },

  button1: {
    width: 100,
    marginTop: 50,
    height: 40, // Adjusted button height
  },
});

export default StateWork;
