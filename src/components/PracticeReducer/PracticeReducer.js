import React from 'react';
import { useState } from 'react';

function PracticeReducer() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <>
      <h1> {count} </h1>

      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click Me
      </button>

      {showText && <p>This is a test for showText state</p>}
    </>
  );
}

export default PracticeReducer;
