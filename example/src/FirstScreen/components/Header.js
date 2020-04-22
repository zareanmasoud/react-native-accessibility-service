/**
 * @flow
 * @format
 */

'use strict';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import type {Node} from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

const Header = (): Node => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('react-native/Libraries/NewAppScreen/components/logo.png')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>
      Welcome to react-native-accessibility-service Example
    </Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;
