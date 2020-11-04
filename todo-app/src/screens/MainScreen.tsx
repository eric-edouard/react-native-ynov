import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View>
      </View>
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