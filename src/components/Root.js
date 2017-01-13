import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

export default () => {
  return (
    <Provider store={configureStore()}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
  )
}
