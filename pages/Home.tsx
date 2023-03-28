import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import CryptoDetail from '../components/Crypto';
import Header from '../components/Header';

import {useSelector} from 'react-redux';
import {useAppDispatch} from '../redux/hook';
import {getAsyncData} from '../redux/actions';

import {Navigation, RootState} from '../models/types';
import {Crypto} from '../models/types';
import Colors from '../components/Colors';

function Home({navigation}: Navigation) {
  const dispatch = useAppDispatch();
  const cryptos = useSelector((state: RootState) => state.Cryptos);

  const handlePress = () => {
    navigation.navigate('AddCrypto');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getAsyncData());
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <Header />
      <ScrollView style={styles.ScrollViewContainer}>
        <View style={styles.container}>
          {cryptos.length > 0 &&
            cryptos.map((crypto: Crypto) => {
              return <CryptoDetail crypto={crypto} key={crypto.id} />;
            })}
          <TouchableOpacity>
            <Text style={styles.text} onPress={handlePress}>
              + Add a Cryptocurrency
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  ScrollViewContainer: {
    backgroundColor: 'white',
  },
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
    color: Colors.blue.color,
    marginVertical: 48,
  },
  icon: {
    marginVertical: 20,
  },
});

export default Home;
