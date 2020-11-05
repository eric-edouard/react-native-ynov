import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

type Props = {
	title: string;
	isDone?: boolean;
	toggleTask: () => void
	deleteTask: () => void
}

const TodoItem: React.FC<Props> = ({ title, isDone, toggleTask, deleteTask }) => {

	return (
		<View style={styles.todo}>
			<TouchableOpacity onPress={toggleTask}>
				<MaterialIcons name={isDone ? "check-box" : "check-box-outline-blank"} size={24} color="black" />
			</TouchableOpacity>
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity onPress={deleteTask}>
				<AntDesign name="close" size={24} color="red" />
			</TouchableOpacity>

		</View>
	)
}

const styles = StyleSheet.create({
	todo: {
		marginLeft: 10,
		marginBottom: 8,
		display: 'flex',
		flexDirection: 'row',
	},
	title: {
		flex: 1,
		marginLeft: 10,
		fontSize: 22,
	},
});

export default TodoItem