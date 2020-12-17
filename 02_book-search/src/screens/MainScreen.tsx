import axios from 'axios';
import { querySelectorByType } from 'epubjs/types/utils/core';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BookItem from '../components/BookItem';

// axios.get(`https://www.googleapis.com/books/v1/volumes?q=`)

const MainScreen = () => {

  const [query, setquery] = useState<string>('')
  const [books, setbooks] = useState<any[]>([])

  const fetchBooks = async () => {
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    setbooks(res.data.items)
  }

  console.log(books)
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <Text style={styles.title}>Search a Book</Text>
        <TextInput style={styles.searchInput} value={query} onChangeText={setquery} />
        <TouchableOpacity style={styles.searchButton} onPress={fetchBooks}>
          <Text style={styles.searchButtonText}>SEARCH</Text>
        </TouchableOpacity>
        {books.map(book =>
          <BookItem
            title={book.volumeInfo.title}
            author={""}
            description={book.volumeInfo.description}
            thumbnailUrl={book.volumeInfo.imageLinks?.thumbnail}
          />)
        }
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
  searchInput: {
    fontWeight: '500',
    fontSize: 24,
    padding: 16,
    backgroundColor: '#F6F6F6'
  },
  searchButton: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#4630EB'
  },
  searchButtonText: {
    fontWeight: '600',
    fontSize: 24,
    color: 'white',
    letterSpacing: 4
  },
  list: {
    padding: 16,
    display: 'flex'
  },
});

export default MainScreen