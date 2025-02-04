import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

export const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log('Hello Hassan');
  }, [count]);
  return (
    <View>
      {/* <Text style={{fontSize: 30}}>useEffect Hook {count}</Text>
      <Button title="UpdateCount" onPress={() => setCount(count + 1)} /> */}
      <Text style={{fontSize: 30}}>useEffect Hook {count}</Text>
      <Text style={{fontSize: 30}}>useEffect Hook Data{data}</Text>

      <Button title="UpdateCount" onPress={() => setCount(count + 1)} />
      <Button title="UpdateData" onPress={() => setData(data + 1)} />
      <User info={{data, count}} />
    </View>
  );
};

const User = props => {
  //   console.log(props.info);
  useEffect(() => {
    console.warn('run this code when data is is updated ');
  }, [props.info.data]);
  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>
        {' '}
        data: {props.info.data}
      </Text>
      <Text style={{fontSize: 30, color: 'orange'}}>
        {' '}
        count: {props.info.count}
      </Text>
    </View>
  );
};
