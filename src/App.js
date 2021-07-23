import './App.css';
import Routing from './routing';
import store, {persistor} from './store';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ThemeProvider from 'providers/themeProvider'

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider>
        <Routing/>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
