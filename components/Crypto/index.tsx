import React, {useEffect, useRef, useMemo} from 'react';
import {Animated} from 'react-native';

import {
  CryptoContainer,
  CryptoTouchableContainer,
  CryptoTouchableContainerImg,
  CryptoFlexLogoContainer,
  CryptoLoaderContainer,
  CryptoInsideContainer,
  CryptoTitle,
  CryptoSubTitle,
  CryptoIconContainer,
  CryptoDivider,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Crypto, NavigationValues} from '../../models/types';
import AnimatedText from '../AnimatedText';
import {theme} from '../../utils/theme';

interface Props {
  crypto: Crypto;
}

const CryptoDetail = ({crypto}: Props) => {
  const navigation: NavigationValues = useNavigation();
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
    if (navigation) navigation.navigate('DetailCrypto', {crypto: crypto});
  };

  const value = useMemo(() => {
    if (crypto.market_data.price_usd) {
      return crypto.market_data.price_usd.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return '';
  }, [crypto.market_data.price_usd]);

  const valuePercentage = useMemo(() => {
    if (crypto.market_data.percent_change_usd_last_1_hour) {
      return crypto.market_data.percent_change_usd_last_1_hour.toLocaleString(
        'en-US',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      );
    }
    return '';
  }, [crypto.market_data.percent_change_usd_last_1_hour]);

  return (
    <>
      <CryptoContainer>
        <CryptoTouchableContainer onPress={handlePress}>
          {!crypto ? (
            <CryptoLoaderContainer spin={spin}>
              <Icon name="autorenew" size={35} color={`${theme.colors.blue}`} />
            </CryptoLoaderContainer>
          ) : (
            <>
              <CryptoFlexLogoContainer>
                <CryptoTouchableContainerImg source={{uri: crypto.image}} />
                <CryptoInsideContainer leftAlign>
                  <CryptoTitle>{crypto.name}</CryptoTitle>
                  <CryptoSubTitle>{crypto.symbol}</CryptoSubTitle>
                </CryptoInsideContainer>
              </CryptoFlexLogoContainer>
              <CryptoInsideContainer rightAlign>
                {crypto.market_data.price_usd ? (
                  <AnimatedText text={value} page="Home"></AnimatedText>
                ) : (
                  <CryptoTitle>Not available</CryptoTitle>
                )}
                {crypto.market_data.percent_change_usd_last_1_hour > 0 ? (
                  <CryptoIconContainer>
                    {crypto.market_data.percent_change_usd_last_1_hour ? (
                      <AnimatedText
                        text={valuePercentage}
                        type="Positive"></AnimatedText>
                    ) : (
                      <CryptoSubTitle>Not available</CryptoSubTitle>
                    )}
                  </CryptoIconContainer>
                ) : (
                  <CryptoIconContainer>
                    {crypto.market_data.percent_change_usd_last_1_hour ? (
                      <AnimatedText
                        text={valuePercentage}
                        type="Negative"></AnimatedText>
                    ) : (
                      <CryptoSubTitle>Not available</CryptoSubTitle>
                    )}
                  </CryptoIconContainer>
                )}
              </CryptoInsideContainer>
            </>
          )}
        </CryptoTouchableContainer>
      </CryptoContainer>
      <CryptoDivider></CryptoDivider>
    </>
  );
};

export default CryptoDetail;
