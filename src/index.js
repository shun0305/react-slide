import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

import App from './App';

// const rootElement = document.getElementById('root');
// ReactDOM.render(

//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);