import React, { useState } from 'react';

export const CounterTwo = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter 2</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};
