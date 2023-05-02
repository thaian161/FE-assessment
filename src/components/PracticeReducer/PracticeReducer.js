import React from 'react';
import { useState, useReducer } from 'react';

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText };

    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

function PracticeReducer() {
  // useState method
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  //useReducer method
  const [state, dispatch] = useReducer(reducerFunction, {
    // initial state
    count: 0,
    showText: true,
  });

  return (
    <>
      <h1> {state.count} </h1>

      <button
        onClick={() => {
          // setCount(count + 1);
          // setShowText(!showText);
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'toggleShowText' });
        }}
      >
        Click Me
      </button>

      {state.showText && <p>This is a test for showText state</p>}
    </>
  );
}

export default PracticeReducer;
