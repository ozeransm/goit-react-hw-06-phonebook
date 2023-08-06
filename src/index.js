import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "../src/components/redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate> 
    </Provider>
  </React.StrictMode>
);
