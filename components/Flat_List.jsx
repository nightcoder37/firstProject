import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const Flat_List = () => {
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
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>List With Flat List Component</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
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

export default Flat_List;
