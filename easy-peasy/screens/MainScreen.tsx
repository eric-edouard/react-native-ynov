
import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Description from '../components/Description'
import Title from '../components/Title'
import Todo from '../components/Todo'
import { useStoreActions, useStoreState } from '../store/hooks'

type Props = {
}

const MainScreen: React.FC<Props> = (props) => {
	const { theme, colors } = useStoreState(state => state.themeModel)
	const todos = useStoreState(state => state.todoModel.todos)

	const setTheme = useStoreActions(actions => actions.themeModel.setTheme)
	const fetchTodos = useStoreActions(actions => actions.todoModel.fetchTodos)

	useEffect(() => {
		fetchTodos()
	}, [])

	return (<View style={{
		flex: 1,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: colors.background
	}}>
		<Title text={"Easy peasy ! " + theme} />
		<Button
			title="switch theme"
			onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		/>
		{todos.map(todo => <Todo key={todo.task} isDone={todo.isDone} task={todo.task} />)}
		{todos.length == 0 ? <Text>Nothing to do </Text> : null}
	</View>)
}

export default MainScreen