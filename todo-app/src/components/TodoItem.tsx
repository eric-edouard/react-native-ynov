import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
	title: string;
	isDone?: boolean;
}

const TodoItem: React.FC<Props> = (props) => {

	return (
		<View style={styles.todo}>
			<MaterialIcons name={props.isDone ? "check-box" : "check-box-outline-blank"} size={24} color="black" />
			<Text style={styles.title}>{props.title}</Text>
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
		marginLeft: 10,
		fontSize: 22,
	},
});

export default TodoItem