import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
const Avatar = require('./assets/avatar.png');
import Colors from './Colors';

function Header() {
  return (
    <View style={[styles.header]}>
      <Text style={styles.headerFont}>CryptoTracker Pro</Text>
      <Image source={Avatar} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 138,
    backgroundColor: Colors.blue.color,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  headerFont: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },
  image: {
    width: 56,
    height: 56,
  },
});

export default Header;
