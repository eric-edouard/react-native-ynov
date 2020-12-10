
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useStoreState } from '../store/hooks'
import { AntDesign } from '@expo/vector-icons';

type Props = {
	isDone: boolean
	task: string
}

const Todo: React.FC<Props> = (props) => {
	const { colors } = useStoreState(state => state.themeModel)

	return (<View style={styles.container}>
		<Text
			style={[styles.text, {
				color: colors.text
			}]}>
			{props.task}
		</Text>
		<AntDesign name={props.isDone ? "checkcircle" : "checkcircleo"} size={24} color={colors.text} />
	</View>)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 8
	},
	text: {
		fontSize: 20,
		fontWeight: '500'
	}
})

export default Todo