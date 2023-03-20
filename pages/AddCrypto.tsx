import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {getOneCrypto} from '../redux/actions';

function AddCrypto({navigation}: any) {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(getOneCrypto(crypto) as any);
    navigation.navigate('Home');
  };

  const handleBack = () => {
    navigation.navigate('Home');
  };

  const [isFocused, setFocused] = useState(false);

  const [crypto, setCrypto] = useState('');

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.addCrypto}>
      <Text style={styles.link} onPress={handleBack}>
        {'<'} Back to list
      </Text>
      <View style={[styles.container, {height: windowHeight * 0.7}]}>
        <Text style={styles.principalText}>Add a Criptocurrency</Text>
        <TextInput
          style={[styles.input, isFocused && styles.focused]}
          placeholder="Use a name or ticker symbol..."
          onChangeText={(text: string) => setCrypto(text)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {/* {error && <Text>{error}</Text>} */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text
              style={[
                styles.buttonText,
                (isFocused || crypto.length > 1) && styles.focusedButton,
              ]}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
        page="AddCrypto"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  addCrypto: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  container: {
    paddingHorizontal: 24,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  link: {
    marginTop: 60,
    marginLeft: 24,
    fontSize: 16,
    fontWeight: '400',
    color: '#385775',
  },
  principalText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: -0.25,
    textAlign: 'left',
    color: '#212B36',
  },
  input: {
    height: 56,
    width: '100%',
    left: 0,
    top: 0,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B7C0C6',
    marginVertical: 40,
    paddingLeft: 8,
    paddingVertical: 16,
  },
  focused: {
    borderColor: '#FBD24D',
    borderWidth: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    height: 48,
    width: 155,
    left: 0,
    top: 0,
    borderRadius: 4,
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
    color: 'rgba(56, 87, 117, 0.2)',
    textAlign: 'center',
  },
  focusedButton: {
    color: '#385775',
  },
});

export default AddCrypto;
