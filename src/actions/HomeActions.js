import axios from 'axios';

export function allCoinsFetchedSuccessfully(coins = []) {
  return {
    type: 'ALL_COINS_FETCHED_SUCCESS',
    coins,
  };
}

export function errorInFetchingAllCoins(hasErrored, errorDetails) {
  return {
    type: 'ALL_COINS_FETCHED_ERROR',
    hasErrored,
    errorDetails,
  };
}

export function fetchingAllCoins(isFetching) {
  return {
    type: 'FETCHING_ALL_COINS',
    isFetching,
  };
}

export function fetchAllCoins() {
  const allCoinsUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
  return (dispatch) => {
    dispatch(fetchingAllCoins(true));
    axios.get(allCoinsUrl)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(fetchingAllCoins(false));
        return response;
      })
      .then(response => response.data)
      .then(data => dispatch(allCoinsFetchedSuccessfully(data)))
      .catch(err => dispatch(errorInFetchingAllCoins(true, err)));
  };
}
