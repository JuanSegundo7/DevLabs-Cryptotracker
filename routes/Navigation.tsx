import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import AddCryptoScreen from '../pages/AddCrypto';
import DetailCryptoScreen from '../pages/DetailCrypto';

import {useSelector} from 'react-redux';
import {useAppDispatch} from '../redux/hook';

import {RootState} from '../models/types';

import {updateCryptosApi, updateCryptos, getAsyncData} from '../redux/actions';

function Navigation() {
  const Stack = createStackNavigator();
  const cryptos = useSelector((state: RootState) => state.Cryptos);
  const updatedInfo = useSelector((state: RootState) => state.UpdatedInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cryptos.length && updatedInfo.length) {
      cryptos.forEach(crypto => {
        dispatch(updateCryptos(crypto, updatedInfo));
      });
    }
  }, [updatedInfo]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      dispatch(updateCryptosApi());
      dispatch(getAsyncData());
    }, 6000);
    return () => clearInterval(interval1);
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="AddCrypto"
        options={{headerShown: false}}
        component={AddCryptoScreen}
      />
      <Stack.Screen
        name="DetailCrypto"
        options={{headerShown: false}}
        component={DetailCryptoScreen}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
