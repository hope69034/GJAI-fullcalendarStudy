/* import Button from 'react-bootstrap/Button'; */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducer from './modules/module.js'
import './fullcalendar-vars.css';

import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material/styles";
//import { theme } from "@/styles/theme";
//import theme from './components/csh/theme'

/* const theme = createTheme({
  palette: {
      success: {
        main: "#891ad3",
      },
    }
});
  */


const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  /* <React.StrictMode>  */




    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <App />
{/* </ThemeProvider> */}
    </Provider>
     
 



 /* </React.StrictMode>   */

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
