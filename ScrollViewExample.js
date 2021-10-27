import React from 'react';
import {ScrollView} from 'react-native';

import PizzaTranslator from './PizzaTranslator';

const ScrollViewExample = () => (
  <ScrollView horizontal>
    <PizzaTranslator />
    <PizzaTranslator />
    <PizzaTranslator />
  </ScrollView>
);

export default ScrollViewExample;
