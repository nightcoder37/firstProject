import React from 'react';
import {FlatList, Text, View} from 'react-native';
import UserData from './UserData';

const ComLoopList = () => {
  const users = [
    {
      id: 1,
      name: 'Ali',
      email: 'ali@test.com',
    },
    {
      id: 2,
      name: 'Raza',
      email: 'raza@test.com',
    },
    {
      id: 3,
      name: 'Shah',
      email: 'shah@test.com',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 25, margin: 10}}>
        Component in Loop With FlatList
      </Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ComLoopList;
