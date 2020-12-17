
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import { useStoreActions, useStoreState } from '../store/hooks'
import { AntDesign } from '@expo/vector-icons';

type Props = {

}

const AddTodoInput: React.FC<Props> = (props) => {
	const { colors } = useStoreState(state => state.theme)
	const createTodo = useStoreActions(actions => actions.todos.createTodo)
	const [task, setTask] = useState<string>('')

	const onPressAdd = () => {
		createTodo({ task })
		setTask('')
	}

	return (<View style={styles.container}>
		<TextInput style={styles.input} value={task} onChangeText={setTask} />
		<Button title="ADD TODO" onPress={onPressAdd} />
	</View>)
}

const styles = StyleSheet.create({
	container: {
		// display: 'flex',
		// flexDirection: 'row',
		// justifyContent: 'space-around',
		// paddingVertical: 8
	},
	input: {
		borderWidth: 1,
		fontSize: 24,
		fontWeight: '500'
	}
})

export default AddTodoInput