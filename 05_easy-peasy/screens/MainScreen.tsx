
import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native'
import Description from '../components/Description'
import Title from '../components/Title'
import Todo from '../components/Todo'
import { useStoreActions, useStoreState } from '../store/hooks'
import { BlurView } from 'expo-blur';
import AddTodoInput from '../components/AddTodoInput'

type Props = {
}

const MainScreen: React.FC<Props> = (props) => {
	const { theme, colors } = useStoreState(state => state.theme)
	const todos = useStoreState(state => state.todos.todos)

	const setTheme = useStoreActions(actions => actions.theme.setTheme)
	const listenTodos = useStoreActions(actions => actions.todos.listenTodos)

	useEffect(() => {
		const unsubscribe = listenTodos()
		return (() => unsubscribe())
	}, [])
	
	return (
		<View style={{
			flex: 1,
			width: '100%',
			display: 'flex',
			// justifyContent: 'center',
			backgroundColor: colors.background
		}}>
			<SafeAreaView>
				<Title text={"Easy peasy ! " + theme} />
				<Button
					title="switch theme"
					onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				/>
				{todos.map((todo) => <Todo key={todo.task} isDone={todo.isDone} task={todo.task} id={todo.id} />)}
				{todos.length == 0 ? <Text>Nothing to do </Text> : null}
				<AddTodoInput />
			</SafeAreaView>

		</View>)
}

export default MainScreen