import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
