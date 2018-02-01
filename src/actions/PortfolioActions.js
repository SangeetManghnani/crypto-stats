
export default function portfolioCoinAdd(coin = {}) {
  return {
    type: 'PORTFOLIO_COIN_ADD',
    coin,
  };
}

