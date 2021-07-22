import { combineReducers } from 'redux';

import { actions as authActions, reducer as authReducer } from 'services/auth';
import { reducer as notesReducer } from 'services/notes';

const combinedRootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer
});

function rootReducer(state, action) {
  if (action.type === authActions.logout.toString()) {
    state = undefined;
    localStorage.removeItem('persist:auth');
    sessionStorage.clear();
  }
  
  return combinedRootReducer(state, action);
}

export default rootReducer;