import React, {createContext} from 'react';

const CountStateContext = createContext({count: 0});
const CountDispatchContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return {
        count: state.count + 1,
      };
    }
    case 'decrement': {
      return {
        count: state.count - 1,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CountProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(countReducer, {count: 0});
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};

const useCountDispatch = () => {
  const context = React.useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
};

const useCountState = () => {
  const context = React.useContext(CountStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};

export {CountProvider, useCountDispatch, useCountState};
