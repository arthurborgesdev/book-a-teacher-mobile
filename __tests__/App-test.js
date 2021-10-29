/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import FlatListBasics from '../FlatListBasics';
import PizzaTranslator from '../PizzaTranslator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ScrollViewExample from '../ScrollViewExample';

jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders the FlatListBasics correctly', () => {
  renderer.create(<FlatListBasics />);
});

it('renders the PizzaTranslator correctly', () => {
  renderer.create(<PizzaTranslator />);
});

it('renders the ScrollViewExample correctly', () => {
  renderer.create(<ScrollViewExample />);
});