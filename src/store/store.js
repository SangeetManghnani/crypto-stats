import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default function configureStore() {
  return composeWithDevTools(applyMiddleware(thunk, createLogger()))(createStore)(rootReducer);
}

