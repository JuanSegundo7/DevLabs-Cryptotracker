import React, {useEffect} from 'react';

import CryptoDetail from '../../components/Crypto/Crypto';
import Header from '../../components/Header/Header';

import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../redux/hook';
import {getAsyncData} from '../../redux/actions';

import {Navigation, RootState} from '../../models/types';
import {Crypto} from '../../models/types';

import {ScrollViewContainer, HomeContainer, HomeText} from './styles';
import {TouchableOpacity} from 'react-native';

const Home = ({navigation}: Navigation) => {
  const dispatch = useAppDispatch();
  const cryptos = useSelector(({Cryptos}: RootState) => Cryptos);

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
      <ScrollViewContainer>
        <HomeContainer>
          {cryptos.length > 0 &&
            cryptos.map((crypto: Crypto) => {
              return <CryptoDetail crypto={crypto} key={crypto.id} />;
            })}
          <TouchableOpacity>
            <HomeText onPress={handlePress}>+ Add a Cryptocurrency</HomeText>
          </TouchableOpacity>
        </HomeContainer>
      </ScrollViewContainer>
    </>
  );
};

export default Home;
