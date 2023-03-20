import React from 'react';
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

function Home({navigation}: any) {
  const handlePress = () => {
    navigation.navigate('AddCrypto');
  };

  const cryptos = useSelector((state: any) => state.Cryptos);

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
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#385775',
    marginVertical: 48,
  },
});

export default Home;
