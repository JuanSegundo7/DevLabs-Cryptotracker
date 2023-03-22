import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Crypto} from '../models/types';
import CryptoDetail from '../components/Crypto';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getAsyncData} from '../redux/actions';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Home({navigation}: any) {
  const dispatch = useDispatch();
  const cryptos = useSelector((state: any) => state.Cryptos);
  console.log(AsyncStorage.getItem('Cryptos'));
  console.log(cryptos, 'cryptos');

  // AsyncStorage.clear();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getAsyncData() as any);
    });
    return unsubscribe;
  }, [dispatch]);

  const handlePress = () => {
    navigation.navigate('AddCrypto');
  };

  return (
    <>
      <Header />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          {cryptos.length > 0 &&
            cryptos.map((crypto: Crypto) => {
              return (
                <CryptoDetail
                  crypto={crypto}
                  key={crypto.id}
                  navigation={navigation}
                />
              );
            })}
          <TouchableOpacity>
            {/* <Text style={styles.text} onPress={handlePress}>
              + Add a Cryptocurrency
            </Text> */}
            <View>
              <Icon
                style={styles.icon}
                onPress={handlePress}
                name="add-circle"
                size={60}
                color="#385775"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#385775',
    marginVertical: 48,
  },
  icon: {
    marginVertical: 20,
  },
});

export default Home;
