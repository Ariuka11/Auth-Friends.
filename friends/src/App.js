import React from 'react';
import {Link, Route} from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to = '/public'>Public Page</Link>
        </li>
        <li>
          <Link to = '/protected'>Protected Page</Link>
        </li>
      </ul>
      <Route path = '/public' component = {} />
      <Route path = '/login' component = {} />
      <PrivateRoute path = '/procted' component = {} />
    </div>
  );
}

export default App;
