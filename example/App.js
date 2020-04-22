/**
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeEventEmitter,
} from 'react-native';

import {Colors, Header, LearnMoreLinks} from './src/FirstScreen';
import AccessibilityService from '@zareanmasoud/react-native-accessibility-service';

const App: () => React$Node = () => {
  let eventEmitterListener = useRef(null);
  let [message, setMessage] = useState('not connected to nativeModule');

  useEffect(() => {
    AccessibilityService.sampleMethod('Testing', 123, messageFromModule => {
      console.log('messageFromModule', messageFromModule);
      setMessage(messageFromModule);
    });

    const eventEmitter = new NativeEventEmitter(AccessibilityService);
    eventEmitterListener.current = eventEmitter.addListener(
      'EventReminder',
      event => {
        console.log('event', event);
      },
    );

    return () => {
      eventEmitterListener.current.remove();
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {message === 'not connected to nativeModule' ? null : (
            <View style={styles.footerContainer}>
              <Text style={styles.footer}>connected to nativeModule</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Turn on{' '}
                <Text style={styles.highlight}>
                  Accessibility option on your device settings
                </Text>{' '}
                to grant permission to this app as an accessibility service.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  footerContainer: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
