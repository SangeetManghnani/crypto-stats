import _ from 'lodash';

export default function portfolioReducer(state = {
  coins: [],
  isAdded: false,
}, action) {
  switch (action.type) {
    case 'PORTFOLIO_COIN_ADD': {
      const newState = _.cloneDeep(state);
      newState.coins.push(action.coin);
      newState.isAdded = true;
      return newState;
    }
    default:
      return state;
  }
}
