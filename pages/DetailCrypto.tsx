import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalContainer from '../components/Modal';
import {useDispatch} from 'react-redux';
import {eliminateCrypto} from '../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Crypto, RootState} from '../models/types';
import AnimatedText from '../components/AnimatedText';

const windowHeight = Dimensions.get('window').height;

function DetailCrypto({route}: any) {
  const cryptos = useSelector((state: RootState) => state.Cryptos);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {params} = route;
  const {crypto} = params;
  const cryptoUpdated = cryptos.find(
    (cryptoFromArray: Crypto) => cryptoFromArray.id === crypto.id,
  );

  useEffect(() => {}, [cryptoUpdated, cryptos]);

  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    navigation.navigate('Home' as never);
  };

  var handleEliminate = () => {
    dispatch(eliminateCrypto(crypto.id) as any);
    setModalVisible(true);
  };

  const value = cryptoUpdated?.market_data.price_usd.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <View style={styles.principalContainer}>
      <Header />
      <Text onPress={handlePress} style={styles.link}>
        {`<`} Back to list
      </Text>
      <View style={[styles.container]}>
        <Image source={{uri: crypto.image}} style={styles.img} />
        <Text style={styles.title}>{crypto.name}</Text>
        <Text>{crypto.symbol}</Text>
        <View style={[styles.insideContainer, styles.rightAlign]}>
          {value && cryptoUpdated && cryptoUpdated.market_data.price_usd ? (
            <AnimatedText text={value} page="Detail" />
          ) : (
            <Text style={styles.title}>Not available</Text>
          )}
          {cryptoUpdated &&
          cryptoUpdated.market_data.percent_change_usd_last_1_hour &&
          cryptoUpdated &&
          cryptoUpdated.market_data.percent_change_usd_last_1_hour > 0 ? (
            <View style={styles.iconContainer}>
              {cryptoUpdated &&
              cryptoUpdated.market_data.percent_change_usd_last_1_hour ? (
                <>
                  <Icon name="north-east" size={15} color="#0A8150" />
                  <Text style={[styles.green, styles.subTitle]}>
                    {cryptoUpdated &&
                      cryptoUpdated.market_data.percent_change_usd_last_1_hour.toLocaleString(
                        'en-US',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      )}
                    %
                  </Text>
                </>
              ) : (
                <Text style={styles.subTitle}>Not available</Text>
              )}
            </View>
          ) : (
            <View style={styles.iconContainer}>
              {cryptoUpdated &&
              cryptoUpdated.market_data.percent_change_usd_last_1_hour ? (
                <>
                  <Icon name="south-west" size={15} color="#DE3617" />
                  <Text style={[styles.red, styles.subTitle]}>
                    {cryptoUpdated &&
                      cryptoUpdated.market_data.percent_change_usd_last_1_hour.toLocaleString(
                        'en-US',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      )}
                    %
                  </Text>
                </>
              ) : (
                <Text style={styles.subTitle}>Not available</Text>
              )}
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleEliminate}>
          <Text style={styles.buttonText}>Eliminate</Text>
        </TouchableOpacity>
      </View>
      <ModalContainer
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        page="Detail"
        logo="Done"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  principalContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  link: {
    marginTop: 40,
    marginLeft: 24,
    fontSize: 16,
    fontWeight: '400',
    color: '#385775',
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.55,
  },
  img: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: 'black',
    marginVertical: 48,
  },
  button: {
    height: 48,
    width: 155,
    left: 0,
    top: 0,
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: '#FBD24D',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0,
    color: 'rgb(56, 87, 117)',
    textAlign: 'center',
  },
  green: {
    color: '#0A8150',
  },
  red: {
    color: '#DE3617',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  rightAlign: {
    alignItems: 'flex-end',
  },
  leftAlign: {
    alignItems: 'flex-start',
  },
  icon: {
    marginTop: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export default DetailCrypto;
