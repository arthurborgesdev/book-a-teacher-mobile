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
      details: "I'm good at marketing",
      subject: 'UX Writter'
    },
  ];
  return (
    <View>
      {
        data.map((teacher) => ( 
          <View 
            key={teacher.id} 
            style={{
              backgroundColor: 'green', 
              padding: 20,
              margin: 10,
            }}>
            <Text style={{fontSize: 20}}>Name: {teacher.name}</Text>
            <Text style={{fontSize: 20}}>Details: {teacher.details}</Text>
            <Text style={{fontSize: 20}}>Subject: {teacher.subject}</Text>
          </View>
        ))
      }
    </View>
  );
};

export default Teachers;