// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'; // Import the new dark mode styles
import './index.css'; // Import your existing global styles
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
