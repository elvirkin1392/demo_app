import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  REHYDRATE,
  REGISTER,
  PERSIST,
  PAUSE,
  FLUSH,
  PURGE,
} from 'redux-persist';

import reducer from './reducer';


//TODO check getDefaultMiddleware function

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export default store;
