import React, {useMemo} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import User from './user';
import Login from './login';
import Admin from './admin';
import getRole from './utils/getRole';
import {getModuleState} from 'services/auth';
import {userRoles} from "lib/enums/roles";

function Routing(props) {
  
  const authState = useSelector(getModuleState);
  const role = getRole(authState);
  
  const Routing = useMemo(() => {
    switch (role) {
      case userRoles.unknown:
        return <Login/>;
      case userRoles.user:
        return <User/>;
      case userRoles.admin:
        return <Admin/>;
    }
  }, [role]);
  
  return (
    <Router>
      {Routing}
    </Router>
  );
}

export default Routing;
