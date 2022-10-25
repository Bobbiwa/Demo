import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@epam/uui-components/styles.css';
import '@epam/loveship/styles.css';
// or if you use promo skin:
import '@epam/promo/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

