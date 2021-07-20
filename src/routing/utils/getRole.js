import { includes } from 'ramda';
import {userRoles} from "lib/enums/roles";

const getRole = (authState) => {
  const currentUserRoles = authState.userProfile['cognito:groups'] || [];
  
  const isAdminRole = includes(userRoles.admin, currentUserRoles);
  
  if (!authState.isAuthenticated) {
    return userRoles.unknown;
  }
  
  if (isAdminRole) {
    return userRoles.admin;
  }

  
  return userRoles.user;
};

export default getRole;