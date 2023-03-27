import {applyMiddleware, createStore, combineReducers, Action} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import cryptoReducer from './reducer';

const store = createStore(cryptoReducer, applyMiddleware(thunk));

export const rootReducer = combineReducers({
  reducer: cryptoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export default store;
