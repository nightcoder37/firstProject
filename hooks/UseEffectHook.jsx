import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

export const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Hello Hassan');
  });
  return (
    <View>
      <Text style={{fontSize: 30}}>useEffect Hook</Text>
      <Button title="UpdateCount" onPress={() => setCount(2)} />
    </View>
  );
};
