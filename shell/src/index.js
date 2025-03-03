import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import('./bootstrap')
  .then(({ start }) => {
    start();
  })
  .catch(err => {
    console.error('Error loading the application:', err);
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);