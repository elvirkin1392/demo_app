import './App.css';
import Routing from './routing';
import store, {persistor} from './store';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routing/>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
