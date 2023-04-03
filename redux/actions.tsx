import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Crypto} from '../models/types';
import env from '../env';

export const GET_ONE_CRYPTO = 'GET_ONE_CRYPTO';
export const UPDATE_CRYPTO = 'UPDATE_CRYPTO';
export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const ELIMINATE_CRYPTO = 'ELIMINATE_CRYPTO';
export const GET_ASYNC_DATA = 'GET_ASYNC_DATA';
export const GET_UPDATE_CRYPTO = 'GET_UPDATE_CRYPTO';

export const getOneCrypto = (crypto: string) => async (dispatch: Function) => {
  try {
    const {data} = await axios.get(
      `${env.API_URL_ONE_ASSET}/${crypto}/metrics`,
      {
        headers: {
          'x-messari-api-key': env.API_KEY,
        },
      },
    );

    const coinGeckoData = await axios.get(
      `${env.API_URL_IMAGES}?query=${crypto.toLowerCase()}`,
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
    console.log(e);
    dispatch({type: ERROR});
  }
};

export const updateCryptos =
  (crypto: Crypto, updatedinfo: Crypto[]) => async (dispatch: Function) => {
    const newObject = updatedinfo.find(
      (cryptoData: Crypto) => crypto.id === cryptoData.id,
    );

    if (newObject) {
      var newPriceUsd = newObject.metrics?.market_data.price_usd;
      var newPercentageUsd =
        newObject.metrics?.market_data.percent_change_usd_last_1_hour;
    }

    crypto = {
      ...crypto,
      market_data: {
        price_usd: newPriceUsd!,
        percent_change_usd_last_1_hour: newPercentageUsd!,
      },
    };

    return dispatch({type: UPDATE_CRYPTO, payload: crypto});
  };

export const updateCryptosApi = () => async (dispatch: Function) => {
  try {
    const info = await axios.get(`${env.API_URL_ALL_ASSETS}`, {
      headers: {
        'x-messari-api-key': env.API_KEY,
      },
    });

    const {data} = info.data;

    const dataFlat = data.flat(1);

    return dispatch({type: GET_UPDATE_CRYPTO, payload: dataFlat});
  } catch (e) {
    console.log(e);
  }
};

export const clearError = () => async (dispatch: Function) => {
  return dispatch({type: CLEAR_ERROR});
};

export const eliminateCrypto = (id: string) => async (dispatch: Function) => {
  return dispatch({type: ELIMINATE_CRYPTO, payload: id});
};

export const getAsyncData = () => async (dispatch: Function) => {
  try {
    const value = await AsyncStorage.getItem('Cryptos');
    if (value !== null) {
      dispatch({type: GET_ASYNC_DATA, payload: JSON.parse(value)});
    }
  } catch (error) {
    console.log(error);
  }
};
