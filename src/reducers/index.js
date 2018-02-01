import { combineReducers } from 'redux';

import homeReducer from './home/HomeReducer';
import portfolioReducer from './portfolio/PortfolioReducer';

const coinsApp = combineReducers({
  home: homeReducer,
  portfolio: portfolioReducer,
});

export default coinsApp;
