import 'react-native-gesture-handler';
import './firebase/firebase';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AuthContextProvider } from './context/AuthContext';
import MainRouter from './routers/MainRouter';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AuthContextProvider >
        <MainRouter />
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
