import React from 'react';
import { Text, View } from 'react-native';

const Teachers = () => {
  const data = [
    {
      id: 1,
      name: 'Arthur',
      details: 'I like teaching',
      subject: 'React'
    },
    {
      id: 2,
      name: 'Fernando',
      details: 'I study hard and teach harder!',
      subject: 'Rails'
    },
    {
      id: 3,
      name: 'Andressa',
      details: "I'm good ad marketing",
      subject: 'CSS'
    },
  ];
  return (
    <View>
      {
        data.map((teacher) => ( 
          <View key={teacher.id}>
            <Text>Name: {teacher.name}</Text>
            <Text>Details: {teacher.details}</Text>
            <Text>Subject: {teacher.subject}</Text>
          </View>
        ))
      }
    </View>
  );
};

export default Teachers;