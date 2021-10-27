import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
  },
  item: {
    padding: 10,
    fontSize: 42,
  },
});

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={inputText => setText(inputText)}
        value={text}
      />
      <Text style={styles.item}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
