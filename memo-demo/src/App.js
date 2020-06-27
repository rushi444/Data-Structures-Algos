import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CounterOne } from './components/CounterOne';
import { CounterTwo } from './components/CounterTwo';

const App = () => {
  return (
    <Router>
      <div style={{textAlign: 'center'}}>
        <h1>useEffect</h1>
        <Link to='/'>Home</Link>
        <p />
        <Link to='/counter2'>Counter</Link>
      </div>
      <Switch>
        <Route exact path='/' component={CounterOne} />
        <Route exact path='/counter2' component={CounterTwo} />
      </Switch>
    </Router>
  );
};

export default App;
