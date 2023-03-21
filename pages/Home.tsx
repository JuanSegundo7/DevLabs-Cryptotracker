import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Crypto} from '../models/types';
import CryptoDetail from '../components/Crypto';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenHeight = Dimensions.get('window').height;

function Home({navigation}: any) {
  const cryptos = useSelector((state: any) => state.Cryptos);

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
