import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SampleComponent from '../components/SampleComponent';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 54,
    padding: 16
  },
  list: {
    padding: 16,
    display: 'flex'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainScreen