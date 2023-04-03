import React, {useMemo, useState} from 'react';
import {Text} from 'react-native';

import Header from '../../components/Header/Header';
import ModalContainer from '../../components/Modal/Modal';
import {useAppDispatch} from '../../redux/hook';
import {eliminateCrypto} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Crypto, RootState, Route} from '../../models/types';
import AnimatedText from '../../components/AnimatedText/AnimatedText';
import {NavigationValues} from '../../models/types';

import {
  DetailCryptoPrincipalContainer,
  DetailCryptoLink,
  DetailCryptoSubContainer,
  DetailCryptoImage,
  DetailCryptoTitle,
  DetailCryptoButton,
  DetailCryptoButtonText,
  DetailCryptoSubTitle,
  DetailCryptoInsideContainer,
  DetailCryptoIconContainer,
} from './styles';

const DetailCrypto = ({route}: Route) => {
  const cryptos = useSelector(({Cryptos}: RootState) => Cryptos);

  const navigation: NavigationValues = useNavigation();
  const dispatch = useAppDispatch();

  const {params} = route;
  const {crypto} = params;

  const cryptoUpdated = cryptos.find(
    (cryptoFromArray: Crypto) => cryptoFromArray.id === crypto.id,
  );

  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    navigation.navigate('Home');
  };

  var handleEliminate = () => {
    dispatch(eliminateCrypto(crypto.id));
    setModalVisible(true);
  };

  const value = useMemo(() => {
    if (cryptoUpdated?.market_data.price_usd) {
      return cryptoUpdated.market_data.price_usd.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return '';
  }, [cryptoUpdated?.market_data.price_usd]);

  const valuePercentage = useMemo(() => {
    if (cryptoUpdated?.market_data.percent_change_usd_last_1_hour) {
      return cryptoUpdated.market_data.percent_change_usd_last_1_hour.toLocaleString(
        'en-US',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      );
    }
    return '';
  }, [cryptoUpdated?.market_data.percent_change_usd_last_1_hour]);

  return (
    <DetailCryptoPrincipalContainer>
      <Header />
      <DetailCryptoLink onPress={handlePress}>
        {`<`} Back to list
      </DetailCryptoLink>
      <DetailCryptoSubContainer>
        <DetailCryptoImage source={{uri: crypto.image}} />
        <DetailCryptoTitle>{crypto.name}</DetailCryptoTitle>
        <Text>{crypto.symbol}</Text>
        <DetailCryptoInsideContainer>
          {cryptoUpdated?.market_data.price_usd ? (
            <AnimatedText text={value} page="Detail" />
          ) : (
            <DetailCryptoTitle>Not available</DetailCryptoTitle>
          )}
          {cryptoUpdated &&
          cryptoUpdated.market_data.percent_change_usd_last_1_hour > 0 ? (
            <DetailCryptoIconContainer>
              {cryptoUpdated?.market_data.percent_change_usd_last_1_hour ? (
                <AnimatedText
                  text={valuePercentage}
                  type="Positive"></AnimatedText>
              ) : (
                <DetailCryptoSubTitle>Not available</DetailCryptoSubTitle>
              )}
            </DetailCryptoIconContainer>
          ) : (
            <DetailCryptoIconContainer>
              {cryptoUpdated?.market_data.percent_change_usd_last_1_hour ? (
                <AnimatedText
                  text={valuePercentage}
                  type="Negative"></AnimatedText>
              ) : (
                <DetailCryptoSubTitle>Not available</DetailCryptoSubTitle>
              )}
            </DetailCryptoIconContainer>
          )}
        </DetailCryptoInsideContainer>
        <DetailCryptoButton onPress={handleEliminate}>
          <DetailCryptoButtonText>Eliminate</DetailCryptoButtonText>
        </DetailCryptoButton>
      </DetailCryptoSubContainer>
      <ModalContainer
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        page="Detail"
        logo="Done"
      />
    </DetailCryptoPrincipalContainer>
  );
};

export default DetailCrypto;
