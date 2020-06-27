import React, { useEffect } from 'react';
import { useCount } from '../useCount';

export const CounterTwo = () => {
  const { count, increment, decrement } = useCount();

  useEffect(() => {
    document.title = `Counter: ${count}`;
    return () => {
      document.title = `React App`;
    };
  }, [count]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
    </div>
  );
};
