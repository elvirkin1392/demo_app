import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './signIn';

function Login() {
  return (
    <Switch>
      <Route path="/">
        <SignIn />
      </Route>
    </Switch>
  );
}

export default Login;