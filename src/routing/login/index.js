import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Content from 'routing/login/content';

function Login() {
  return (
    <Switch>
      <Route path="/">
        <Content />
      </Route>
    </Switch>
  );
}

export default Login;