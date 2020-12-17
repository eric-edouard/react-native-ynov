
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useStoreActions, useStoreState } from '../store/hooks'
import { AntDesign } from '@expo/vector-icons';

type Props = {
	isDone: boolean
	task: string
	id: string
}

const Todo: React.FC<Props> = (props) => {
	const { colors } = useStoreState(state => state.theme)
	const setDone = useStoreActions(actions => actions.todos.setDone)


	const onPressCheck = () => {
		setDone({ id: props.id, isDone: !props.isDone})
	}

	return (<View style={styles.container}>
		<Text
			style={[styles.text, {
				color: colors.text

			}]}>
			{props.task}
		</Text>
		<TouchableOpacity onPress={onPressCheck}>
			<AntDesign name={props.isDone ? "checkcircle" : "checkcircleo"} size={24} color={colors.text} />
		</TouchableOpacity>
	</View>)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',

		paddingVertical: 8,
		paddingHorizontal: 32
	},
	text: {
		flex: 1,
		fontSize: 20,
		fontWeight: '500'
	}
})

export default Todo