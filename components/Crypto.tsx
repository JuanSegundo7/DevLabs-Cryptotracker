import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Crypto} from '../models/types';
import AnimatedText from './AnimatedText';
import Colors from '../utils/Colors';

interface Props {
  crypto: Crypto;
}

function CryptoDetail({crypto}: Props) {
  const navigation = useNavigation();
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinAnim]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handlePress = () => {
    if (navigation)
      navigation.navigate('DetailCrypto' as never, {crypto: crypto} as never);
  };

  var value;
  var valuePercentage;

  if (crypto.market_data.price_usd) {
    value = crypto.market_data.price_usd.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  if (crypto.market_data.percent_change_usd_last_1_hour) {
    valuePercentage =
      crypto.market_data.percent_change_usd_last_1_hour.toLocaleString(
        'en-US',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      );
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchableContainer}
          onPress={handlePress}>
          {!Object.keys(crypto).length ? (
            <Animated.View
              style={[styles.loaderContainer, {transform: [{rotate: spin}]}]}>
              <Icon name="autorenew" size={35} color="#385775" />
            </Animated.View>
          ) : (
            <>
              <View style={[styles.flexLogo, styles.leftAlign]}>
                <Image source={{uri: crypto.image}} style={styles.img} />
                <View style={[styles.insideContainer, styles.leftAlign]}>
                  <Text style={styles.title}>{crypto.name}</Text>
                  <Text style={styles.subTitle}>{crypto.symbol}</Text>
                </View>
              </View>
              <View style={[styles.insideContainer, styles.rightAlign]}>
                {value && crypto.market_data.price_usd ? (
                  <AnimatedText text={value} page="Home"></AnimatedText>
                ) : (
                  <Text style={styles.title}>Not available</Text>
                )}
                {crypto.market_data.percent_change_usd_last_1_hour &&
                crypto.market_data.percent_change_usd_last_1_hour > 0 ? (
                  <View style={styles.iconContainer}>
                    {valuePercentage &&
                    crypto.market_data.percent_change_usd_last_1_hour ? (
                      <AnimatedText
                        text={valuePercentage}
                        type="Positive"></AnimatedText>
                    ) : (
                      <Text style={styles.subTitle}>Not available</Text>
                    )}
                  </View>
                ) : (
                  <View style={styles.iconContainer}>
                    {valuePercentage &&
                    crypto.market_data.percent_change_usd_last_1_hour ? (
                      <AnimatedText
                        text={valuePercentage}
                        type="Negative"></AnimatedText>
                    ) : (
                      <Text style={styles.subTitle}>Not available</Text>
                    )}
                  </View>
                )}
              </View>
            </>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
    </>
  );
}

const styles = StyleSheet.create({
  touchableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  img: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  flexLogo: {
    flexDirection: 'row',
  },
  loaderContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: 112,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  insideContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.blackTitle.color,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.grey.color,
    width: '85%',
    marginTop: 10,
    marginBottom: 10,
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
});

export default CryptoDetail;
