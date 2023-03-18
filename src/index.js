import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes.js';
import GlobalStyle from './globalStyles.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GlobalStyle/>
    <Routes />
    
  </>
);
