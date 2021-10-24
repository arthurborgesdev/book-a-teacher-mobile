import React from 'react';
import { Text, View } from 'react-native';
import { useGetTeachersQuery } from './services/teacher';

const Teachers = () => {
  const { data, error, isLoading } = useGetTeachersQuery();
  return (
    <View>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
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
      ) : null}
      
    </View>
  );
};

export default Teachers;