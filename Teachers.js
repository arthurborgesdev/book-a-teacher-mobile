import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useGetTeachersQuery} from './services/teacher';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 20,
    margin: 10,
  },
  item: {
    fontSize: 20,
  },
});

const Teachers = () => {
  const {data, error, isLoading} = useGetTeachersQuery();
  return (
    <View>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        data.map(teacher => (
          <View key={teacher.id} style={styles.container}>
            <Text style={styles.item}>Name: {teacher.name}</Text>
            <Text style={styles.item}>Details: {teacher.details}</Text>
            <Text style={styles.item}>Subject: {teacher.subject}</Text>
          </View>
        ))
      ) : null}
    </View>
  );
};

export default Teachers;
