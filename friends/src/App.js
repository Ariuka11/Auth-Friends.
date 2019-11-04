import React from 'react';
import {Link, Route} from 'react-router-dom'
import PrivateRoute from './protectedPage/PrivateRoute';
import Login from './login/LoginPage';
import ProtectedPage from './protectedPage/ProtectedPage';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to = '/friendsPage'>Friends Page</Link>
        </li>
        <li>
          <Link to = '/login'>Login</Link>
        </li>
      </ul>
      <Route path = '/login' component = {Login} />
      <PrivateRoute path = '/friendsPage' component = {ProtectedPage} />
    </div>
  );
}

export default App;
