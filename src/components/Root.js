import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';

export default () => {
  return (
    <Provider store={configureStore()}>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <App />
      </MuiThemeProvider>
    </Provider>
  )
}
