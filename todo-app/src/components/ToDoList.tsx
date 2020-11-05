import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
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

const TodoList = () => {
	const [newTask, setNewTask] = useState<string>('')
	const [taskList, setTaskList] = useState<Todo[]>(defaultTasks)

	useEffect(() => {
		
		AsyncStorage.getItem('taskList')
			.then(value => {
				if (!value)
					return
				setTaskList(JSON.parse(value))
			})
		console.log("component mounted")
	}, [])

	useEffect(() => {
		AsyncStorage.setItem('taskList', JSON.stringify(taskList))
	}, [taskList])

	const toggleTask = (index: number) => {
		const newTaskList = taskList
		newTaskList[index].isDone = !newTaskList[index].isDone
		setTaskList([...newTaskList])
	}

	const addNewTask = () => {
		if (newTask === '')
			return
		setTaskList([...taskList, { title: newTask, isDone: false }])
		setNewTask('')
	}

	const deleteTask = (index: number) => {
		taskList.splice(index, 1)
		setTaskList([...taskList])
	}



	return (
		<>
			<View style={styles.taskList}>
				{taskList.map((task, index) =>
					<TodoItem
						key={task.title}
						title={task.title}
						isDone={task.isDone}
						toggleTask={() => toggleTask(index)}
						deleteTask={() => deleteTask(index)}
					/>
				)}
			</View>
			<TextInput
				style={styles.input}
				value={newTask}
				onChangeText={setNewTask}
			/>
			<Button title="add task" onPress={addNewTask} />
		</>
	);
}

const styles = StyleSheet.create({
	taskList: {
		padding: 8
	},
	input: {
		fontSize: 22,
		borderWidth: 1,
		borderColor: 'grey'
	}

});

export default TodoList