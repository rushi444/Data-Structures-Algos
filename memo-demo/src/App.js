import React, { useState } from 'react';
import './App.css';

import { NameInput, NameInputMemo } from './NameInput';
import { AgeInput, AgeInputMemo } from './AgeInput';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div className='App'>
      <header className='App-header'>Memo Demo</header>
      <NameInputMemo name={name} setName={setName} />
      <AgeInputMemo age={age} setAge={setAge} />
      <p>
        Hi, my name is {name}, I am {age} years old
      </p>
    </div>
  );
}

export default App;
