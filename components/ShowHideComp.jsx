import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const ShowHideComp = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text style={{fontSize: 30}}>SHow & Hide Component</Text>
      <Button title="Toggle Component" onPress={() => setShow(!show)} />
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
	
  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>User Component</Text>
    </View>
  );
};

// export default ShowHideComp;
