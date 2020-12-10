import { StoreProvider } from 'easy-peasy';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Description from './components/Description';
import Title from './components/Title';
import MainScreen from './screens/MainScreen';
import store from './store/store'
import firebase from './firebase/firebase'

export default function App() {
  return (
    <StoreProvider store={store} >
      <View style={styles.container}>
        <MainScreen />
        <StatusBar style="auto" />
      </View>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
