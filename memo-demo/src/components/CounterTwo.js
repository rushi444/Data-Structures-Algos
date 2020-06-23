import React, { useState } from 'react';
import {useCount} from '../useCount'

export const CounterTwo = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter 2</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
    </div>
  );
};
