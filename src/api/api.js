import axios from 'axios';

const allCoinsUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

export default function getCoinList(callback) {
  axios.get(allCoinsUrl)
    .then(response => response.data)
    .then((Data) => {
      callback(null, Data);
    })
    .catch((err) => {
      callback(err);
    });
}

