import React from 'react';
import {Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../redux/hook';
import {clearError} from '../../redux/actions';
import {NavigationValues, RootState} from '../../models/types';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ModalBackground,
  ModalContainerStyle,
  ModalCrossContainer,
  ModalCross,
  ModalText,
} from './styles';
import {theme} from '../../utils/theme';

interface ModalInterface {
  modalVisible: boolean;
  setModalVisible: Function;
  page: string;
  logo: string;
}

const ModalContainer = ({
  modalVisible,
  setModalVisible,
  page,
  logo,
}: ModalInterface) => {
  const dispatch = useAppDispatch();
  const error = useSelector(({Error}: RootState) => Error);
  const apiError = useSelector(({ApiError}: RootState) => ApiError);
  const navigation: NavigationValues = useNavigation();

  const handlePress = () => {
    dispatch(clearError());

    if (page == 'Detail') {
      setModalVisible(false);
      navigation.navigate('Home');
    }

    setModalVisible(false);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <ModalBackground>
        <ModalContainerStyle>
          <ModalCrossContainer>
            <ModalCross onPress={handlePress}>
              <Icon name="highlight-off" size={20} color="black" />
            </ModalCross>
          </ModalCrossContainer>
          {logo === 'Done' ? (
            <Icon
              name="check-circle"
              size={65}
              color={`${theme.colors.green}`}
            />
          ) : (
            <Icon name="cancel" size={65} color={`${theme.colors.red}`} />
          )}
          <ModalText>{(error && error) || (apiError && apiError)}</ModalText>
        </ModalContainerStyle>
      </ModalBackground>
    </Modal>
  );
};

export default ModalContainer;
