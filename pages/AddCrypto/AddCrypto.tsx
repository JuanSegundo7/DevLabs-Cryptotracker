import React, {useEffect, useState} from 'react';

import {
  AddCryptoPrincipalContainer,
  AddCryptoSubContainer,
  AddCryptoLink,
  AddCryptoPrincipalText,
  AddCryptoTextInput,
  AddCryptoButtonContainer,
  AddCryptoButton,
  AddCryptoText,
} from './styles';

import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../redux/hook';
import {getOneCrypto} from '../../redux/actions';
import ModalComponent from '../../components/Modal/Modal';
import {Navigation, RootState} from '../../models/types';

const AddCrypto = ({navigation}: Navigation) => {
  const error = useSelector(({Error}: RootState) => Error);
  const dispatch = useAppDispatch();

  const [isEffectComplete, setIsEffectComplete] = useState(false);
  const [isActionComplete, setIsActionComplete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [crypto, setCrypto] = useState('');

  const handleFocus = () => {
    setIsDisabled(false);
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useEffect(() => {
    if (error) {
      setModalVisible(true);
    }
    setIsEffectComplete(true);
  }, [error]);

  useEffect(() => {
    if (isEffectComplete && isActionComplete && !error) {
      navigation.navigate('Home');
    }
  }, [isEffectComplete, isActionComplete, error]);

  const handlePress = async () => {
    try {
      await dispatch(getOneCrypto(crypto));
      setIsActionComplete(true);
    } catch (error) {
      setIsEffectComplete(false);
      setIsActionComplete(false);
      setModalVisible(true);
    }
  };

  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <AddCryptoPrincipalContainer>
      <AddCryptoLink onPress={handleBack}>{'<'} Back to list</AddCryptoLink>
      <AddCryptoSubContainer>
        <AddCryptoPrincipalText>Add a Criptocurrency</AddCryptoPrincipalText>
        <AddCryptoTextInput
          isFocused={isFocused}
          placeholder="Use a name or ticker symbol..."
          onChangeText={(text: string) => setCrypto(text)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <AddCryptoButtonContainer>
          <AddCryptoButton
            isDisabled={isDisabled || !crypto}
            disabled={isDisabled || !crypto}
            onPress={handlePress}>
            <AddCryptoText isFocused={crypto.length > 0}>Add</AddCryptoText>
          </AddCryptoButton>
        </AddCryptoButtonContainer>
      </AddCryptoSubContainer>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        page="AddCrypto"
        logo="Cross"
      />
    </AddCryptoPrincipalContainer>
  );
};

export default AddCrypto;
