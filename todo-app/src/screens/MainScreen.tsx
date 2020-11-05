import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button } from 'react-native';
import Header from '../components/Header'
import TodoItem from '../components/TodoItem';

type Todo = {
  title: string;
  isDone: boolean
}

const defaultTasks: Todo[] = [
  {
    title: "Buy the groceries",
    isDone: false
  },
  {
    title: "Clean the car",
    isDone: false
  },
  {
    title: "Work on side projet",
    isDone: false
  },
]

const MainScreen = () => {
  const [taskList, setTaskList] = useState<Todo[]>(defaultTasks)

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.taskList}>
          {taskList.map(task => <TodoItem key={task.title} title={task.title} isDone={task.isDone} />)}
        </View>
        <Button title="Add to do" onPress={() =>
          setTaskList([...taskList, {
            title: "to do",
            isDone: false
          }])} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titleContainer: {
    borderWidth: 1,
    display: "flex",
    alignItems: "center"
  },
  title: {
    fontWeight: '800',
    fontSize: 10,
    padding: 16
  },
  list: {
    padding: 16,
    display: 'flex'
  },
  taskList: {
    padding: 8
  }
});

export default MainScreen