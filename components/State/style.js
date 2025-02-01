import {StyleSheet} from 'react-native';

export const exStyles = StyleSheet.create({
  mainView: {
    margin: 20,
  },

  button1: {
    width: 250,
    padding: 10,
    backgroundColor: '#4CAF50', // Green background
    borderRadius: 10,
    alignItems: 'center',
    top: 60,
    left: 65,
  },

  textwork: {
    backgroundColor: 'green',
    Width: 100,
    color: '#fff',
    fontSize: 25,
    padding: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlignVertical: 'center',
  },
  image: {
    flex: 1, // Allows the image to stretch and fit the container
    borderRadius: 10, // Optionally add rounded corners if needed
  },
  textIn: {
    borderWidth: 2,
    color: 'red',
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'red',
  },
});
