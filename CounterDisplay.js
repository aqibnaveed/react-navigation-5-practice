import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import context from './context';

const CounterDisplay = () => {
  const {counter, setCounter} = useContext(context);
  return (
    <View>
      <Text>Count: {counter}</Text>
    </View>
  );
};

export default CounterDisplay;
