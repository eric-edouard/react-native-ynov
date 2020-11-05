import React, { useState } from 'react';
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
	const [taskList, setTaskList] = useState<Todo[]>(defaultTasks)
	const [newTask, setNewTask] = useState<string>('')

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

	return (
		<>
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