import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CounterOne } from './components/CounterOne';
import { CounterTwo } from './components/CounterTwo';

const App = () => {
  return (
    <Router>
      <div style={{textAlign: 'center'}}>
        <h1>Custom Hooks</h1>
        <Link to='/'>Counter 1</Link>
        <p />
        <Link to='/counter2'>Counter 2</Link>
      </div>
      <Switch>
        <Route exact path='/' component={CounterOne} />
        <Route exact path='/counter2' component={CounterTwo} />
      </Switch>
    </Router>
  );
};

export default App;
