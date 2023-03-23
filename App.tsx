/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import AddCryptoScreen from './pages/AddCrypto';
import DetailCryptoScreen from './pages/DetailCrypto';

import store from './redux/store';
import Navigation from './routes/Navigation';

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
