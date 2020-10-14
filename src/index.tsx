import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './unstated/cart';
import App from './App';
import Session from './unstated/session';

ReactDOM.render(
  <Session.Provider>
    <Cart.Provider>
      <App />
    </Cart.Provider>
  </Session.Provider>,
  document.getElementById('root')
);
