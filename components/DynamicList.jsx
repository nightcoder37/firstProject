import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DynamicList = () => {
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
      id: 6,
      name: 'Ali Raza',
    },
    {
      id: 7,
      name: 'Ahmad',
    },
    {
      id: 8,
      name: 'Saqi',
    },
    {
      id: 9,
      name: 'Alex',
    },
    {
      id: 10,
      name: 'MOJO',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Grid With Dynamic Data</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
export default DynamicList;
