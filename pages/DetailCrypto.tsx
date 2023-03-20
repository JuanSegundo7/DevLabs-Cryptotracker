import React from 'react';
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

function DetailCrypto({navigation, route}: any) {
  const {params} = route;
  const {crypto} = params;

  const windowHeight = Dimensions.get('window').height;

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Header />
      <Text onPress={handlePress} style={styles.link}>
        {`<`} Back to list
      </Text>
      <View style={[styles.container, {height: windowHeight * 0.5}]}>
        <Image source={{uri: crypto.image}} style={styles.img} />
        <Text style={styles.title}>{crypto.name}</Text>
        <Text>{crypto.symbol}</Text>
        <View style={[styles.insideContainer, styles.rightAlign]}>
          {crypto.market_data.price_usd ? (
            <Text style={styles.title}>
              $
              {crypto.market_data.price_usd.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          ) : (
            <Text style={styles.title}>Not available</Text>
          )}
          {crypto.market_data.percent_change_usd_last_1_hour &&
          crypto.market_data.percent_change_usd_last_1_hour > 0 ? (
            <View style={styles.iconContainer}>
              {crypto.market_data.percent_change_usd_last_1_hour ? (
                <>
                  <Icon name="north-east" size={15} color="#0A8150" />
                  <Text style={[styles.green, styles.subTitle]}>
                    {crypto.market_data.percent_change_usd_last_1_hour.toLocaleString(
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
              {crypto.market_data.percent_change_usd_last_1_hour ? (
                <>
                  <Icon name="south-west" size={15} color="#DE3617" />
                  <Text style={[styles.red, styles.subTitle]}>
                    {crypto.market_data.percent_change_usd_last_1_hour.toLocaleString(
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Eliminate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: '100%',
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
    marginTop: 20,
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
