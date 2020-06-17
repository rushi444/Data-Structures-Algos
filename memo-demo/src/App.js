import React, { lazy, Suspense } from 'react';
import './App.css';
import MyComp from './components/MyComp';
// import MyComp2 from './components/MyComp2';

const MyComp2 = lazy(() => import('./components/MyComp2'));

export default function App() {
  return (
    <div>
      <MyComp />
      <Suspense fallback={<div>Loading...</div>}>
        <MyComp2 />
      </Suspense>
    </div>
  );
}

