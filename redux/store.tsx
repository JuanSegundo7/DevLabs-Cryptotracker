import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import cryptoReducer from './reducer';

const store = createStore(cryptoReducer, applyMiddleware(thunk));

export const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
