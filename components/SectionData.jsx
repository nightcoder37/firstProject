import React from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';

const SectionData = () => {
  const users = [
    {
      id: 1,
      name: 'Abrar',
      data: ['PHP', 'React js', 'Angular'],
    },
    {
      id: 2,
      name: 'Burak',
      data: ['java', 'js', 'HTML'],
    },
    {
      id: 3,
      name: 'Momin',
      data: ['C', 'C++', 'Python'],
    },
    {
      id: 4,
      name: 'Lee',
      data: ['CSS', 'Bootstrap', 'HTML'],
    },
  ];
  return (
    <SafeAreaView >
      <Text style={{fontSize: 30}}>Section List in React-Native</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 30, color: 'red',marginLeft: 10}}>{name}</Text>
        )}
      />
    </SafeAreaView >
  );
};

export default SectionData;
