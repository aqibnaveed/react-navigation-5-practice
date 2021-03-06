import React from 'react';

const MyContext = React.createContext({
  counter: 0,
  setCounter: () => {},
});

export default MyContext;
