import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, TouchableOpacity, TextInput } from 'react-native';
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
  const [newTask, setNewTask] = useState<string>('')

  const toggleTask = (index: number) => {
    const newTaskList = taskList
    newTaskList[index].isDone = !newTaskList[index].isDone
    setTaskList([...newTaskList])
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.taskList}>
          {taskList.map((task, index) =>
            <TodoItem
              key={task.title}
              title={task.title}
              isDone={task.isDone}
              toggleTask={() => toggleTask(index)}
            />
          )}
        </View>
        <TextInput
          style={styles.input}
          value={newTask}
          onChangeText={setNewTask}
        />
        <Button title="add task" onPress={() => null} />
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
  },
  input: {
    fontSize: 22,
    borderWidth: 1,
    borderColor: 'grey'
  }

});

export default MainScreen