import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
