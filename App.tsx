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
const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
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
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
