import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// axios.get(`https://www.googleapis.com/books/v1/volumes?q=`)

const MainScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <Text style={styles.title}>Search a Book</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 42,
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainScreen