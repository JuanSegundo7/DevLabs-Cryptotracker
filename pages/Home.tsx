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

import {useSelector, useDispatch} from 'react-redux';
import {getAsyncData} from '../redux/actions';

import {Navigation, RootState} from '../models/types';
import {Crypto} from '../models/types';
import {AnyAction} from 'redux';

function Home({navigation}: Navigation) {
  const dispatch = useDispatch();
  const cryptos = useSelector((state: RootState) => state.Cryptos);

  const handlePress = () => {
    navigation.navigate('AddCrypto');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getAsyncData() as any);
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
            {/* <View>
              <Icon
                style={styles.icon}
                onPress={handlePress}
                name="add-circle"
                size={60}
                color="#385775"
              />
            </View> */}
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
    color: '#385775',
    marginVertical: 48,
  },
  icon: {
    marginVertical: 20,
  },
});

export default Home;
