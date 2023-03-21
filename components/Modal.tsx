import React from 'react';
import {Modal, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {clearError} from '../redux/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ModalInterface {
  modalVisible: boolean;
  setModalVisible: Function;
  page: string;
  navigation: any;
}

function ModalContainer({
  modalVisible,
  setModalVisible,
  page,
  navigation,
}: ModalInterface) {
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.Error);

  const handlePress = () => {
    dispatch(clearError() as any);

    if (page == 'Detail') {
      setModalVisible(false);
      navigation.navigate('Home');
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
          <Text style={styles.text}>{error && error}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalContainer: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
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
});

export default ModalContainer;
