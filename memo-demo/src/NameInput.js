import React from 'react';

export const NameInput = ({ name, setName }) => {
  console.log('rendering NameInput');
  return (
    <div>
      <input
        type='text'
        name='name'
        value={name}
        placeholder='Enter Name'
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
};

export const NameInputMemo = React.memo(NameInput, areEqual);
