import _ from 'lodash';

export default function homeReducer(state = {
  coins: [],
  hasErrored: false,
  errorDetails: '',
  isFetching: false,
}, action) {
  switch (action.type) {
    case 'ALL_COINS_FETCHED_SUCCESS': {
      const newState = _.cloneDeep(state);
      newState.coins = action.coins;
      newState.hasErrored = false;
      newState.errorDetails = '';
      newState.isFetching = false;
      return newState;
    }
    case 'ALL_COINS_FETCHED_ERROR': {
      const newState = _.cloneDeep(state);
      newState.coins = [];
      newState.hasErrored = action.hasErrored;
      newState.errorDetails = action.errorDetails;
      newState.isFetching = false;
      return newState;
    }
    case 'FETCHING_ALL_COINS': {
      const newState = _.cloneDeep(state);
      newState.coins = [];
      newState.hasErrored = false;
      newState.errorDetails = '';
      newState.isFetching = true;
      return newState;
    }
    default:
      return state;
  }
}
