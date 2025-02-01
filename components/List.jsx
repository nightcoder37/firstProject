import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const List = () => {
  const users = [
    {
      id: 1,
      name: 'Ali',
    },
    {
      id: 2,
      name: 'Yazdaan',
    },
    {
      id: 3,
      name: 'Wasif Shah Chor',
    },
    {
      id: 4,
      name: 'Bruce Lee',
    },
    {
      id: 5,
      name: 'Jet Lee',
    },
    {
      id: 1,
      name: 'Ali',
    },
    {
      id: 2,
      name: 'Yazdaan',
    },
    {
      id: 3,
      name: 'Wasif Shah Chor',
    },
    {
      id: 4,
      name: 'Bruce Lee',
    },
    {
      id: 5,
      name: 'Jet Lee',
    },
    {
      id: 1,
      name: 'Ali',
    },
    {
      id: 2,
      name: 'Yazdaan',
    },
    {
      id: 3,
      name: 'Wasif Shah Chor',
    },
    {
      id: 4,
      name: 'Bruce Lee',
    },
    {
      id: 5,
      name: 'Jet Lee',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Custom List Work With Map </Text>
      <ScrollView style={{marginBottom: 60}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export default List;
