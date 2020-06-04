import React from 'react';

export const AgeInput = ({ age, setAge }) => {
  console.log('rendering AgeInput');
  return (
    <div>
      <input
        type='number'
        name='age'
        value={age}
        placeholder='Enter Age'
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.age === nextProps.age;
};

export const AgeInputMemo = React.memo(AgeInput, areEqual);
