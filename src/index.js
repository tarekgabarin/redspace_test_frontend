import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: yellow
    },
    status: {
      danger: 'orange',
    },
  });
  


ReactDOM.render(
<ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
,document.getElementById('root'));

serviceWorker.unregister();
