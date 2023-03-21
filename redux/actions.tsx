import axios from 'axios';

export const GET_ONE_CRYPTO = 'GET_ONE_CRYPTO';
export const UPDATE_CRYPTOS = 'UPDATE_CRYPTOS';
export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const ELIMINATE_CRYPTO = 'ELIMINATE_CRYPTO';

export const getOneCrypto = (crypto: string) => async (dispatch: Function) => {
  try {
    const {data} = await axios.get(
      `https://data.messari.io/api/v1/assets/${crypto}/metrics`,
    );

    const coinGeckoData = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${crypto.toLowerCase()}`,
    );

    const finalCrypto = {
      id: data.data.id,
      name: data.data.name,
      slug: data.data.slug,
      symbol: data.data.symbol,
      market_data: {
        price_usd: data.data.market_data.price_usd,
        percent_change_usd_last_1_hour:
          data.data.market_data.percent_change_usd_last_1_hour,
      },
      image: coinGeckoData.data.coins[0].large,
    };

    dispatch({type: GET_ONE_CRYPTO, payload: finalCrypto});
  } catch (e) {
    dispatch({type: ERROR});
  }
};

export const clearError = () => async (dispatch: Function) => {
  return dispatch({type: CLEAR_ERROR});
};

export const eliminateCrypto = (id: string) => async (dispatch: Function) => {
  return dispatch({type: ELIMINATE_CRYPTO, payload: id});
};
