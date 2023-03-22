import {Crypto} from '../models/types';
import {
  GET_ONE_CRYPTO,
  UPDATE_CRYPTOS,
  ERROR,
  CLEAR_ERROR,
  ELIMINATE_CRYPTO,
  GET_ASYNC_DATA,
} from './actions';

import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  Cryptos: [],
  Crypto: {},
  Error: '',
};

const cryptoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ONE_CRYPTO: {
      const array = state.Cryptos;

      if (array.some((crypto: Crypto) => crypto.id === action.payload.id)) {
        return {
          ...state,
          Error: 'The searched crypto currency is already in the list',
        };
      }

      AsyncStorage.setItem(
        'Cryptos',
        JSON.stringify(
          state.Cryptos.length > 0
            ? [...state.Cryptos, action.payload]
            : [action.payload],
        ),
      );

      return {
        ...state,
      };
    }

    case GET_ASYNC_DATA: {
      return {
        ...state,
        Cryptos: action.payload,
      };
    }

    case ELIMINATE_CRYPTO: {
      const array = state.Cryptos;

      const newArray = array.filter(
        (crypto: Crypto) => crypto.id !== action.payload,
      );

      AsyncStorage.setItem('Cryptos', JSON.stringify(newArray));

      return {
        ...state,
        Error: 'The crypto currency has been deleted from the list succesfully',
      };
    }

    case UPDATE_CRYPTOS: {
      return {
        ...state,
        Crypto: action.payload,
      };
    }

    case ERROR: {
      return {
        ...state,
        Error: 'The searched crypto is not available or it does not exist',
      };
    }

    case CLEAR_ERROR: {
      return {
        ...state,
        Error: '',
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default cryptoReducer;
