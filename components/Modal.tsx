import React from 'react';
import {Modal, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../redux/hook';
import {clearError} from '../redux/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootState} from '../models/types';
import {useNavigation} from '@react-navigation/native';
import Colors from '../utils/Colors';

interface ModalInterface {
  modalVisible: boolean;
  setModalVisible: Function;
  page: string;
  logo: string;
}

function ModalContainer({
  modalVisible,
  setModalVisible,
  page,
  logo,
}: ModalInterface) {
  const dispatch = useAppDispatch();
  const error = useSelector(({Error}: RootState) => Error);
  const navigation = useNavigation();

  const handlePress = () => {
    dispatch(clearError());

    if (page == 'Detail') {
      setModalVisible(false);
      navigation.navigate('Home' as never);
    }

    setModalVisible(false);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.crossContainer}>
            <TouchableOpacity style={styles.cross} onPress={handlePress}>
              <Icon name="highlight-off" size={20} color="black" />
            </TouchableOpacity>
          </View>
          {logo === 'Done' ? (
            <Icon
              name="check-circle"
              style={styles.icons}
              size={60}
              color={'#0A8150'}
            />
          ) : (
            <Icon
              name="cancel"
              style={styles.icons}
              size={60}
              color={'#DE3617'}
            />
          )}
          <Text style={styles.text}>{error && error}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalContainer: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: Colors.white.color,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 'auto',
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    paddingVertical: 5,
  },
  crossContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cross: {
    width: 'auto',
  },
  icons: {
    marginBottom: 10,
  },
});

export default ModalContainer;
