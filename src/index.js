import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import coinsApp from './store/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = coinsApp();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
