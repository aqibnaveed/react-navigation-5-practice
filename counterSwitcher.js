import React, {useContext} from 'react';
import {View, Button} from 'react-native';

import context from './context';

const CounterSwitcher = () => {
  const {counter, setCounter} = useContext(context);
  let title = 'Button Clicked ' + counter + ' times';
  return (
    <View>
      <Button title={title} onPress={() => setCounter(counter + 1)}></Button>
    </View>
  );
};

export default CounterSwitcher;
