import { Action, action, Thunk, thunk } from 'easy-peasy'
import firebase from '../../firebase/firebase'
import { StoreModel } from '.'

type Todo = {
	isDone: boolean
	task: string
}

export interface TodoModel {
	/**
	 * State
	 */
	todos: Todo[]

	/**
	 * Actions
	 */
	setTodos: Action<TodoModel, Todo[]>

	/**
	 * Thunks
	 */
	fetchTodos: Thunk<TodoModel, void, void, StoreModel, Promise<void>>
}

const todoModel: TodoModel = {
	todos: [],


	setTodos: action((state, payload) => {
		return ({ todos: [...payload] })
	}),

	fetchTodos: thunk(async (actions, payload, { getState, getStoreActions }) => {
		const snapShot = await firebase.firestore().collection('todos').get()
		const todos = snapShot.docs.map(d => d.data() as Todo)
		actions.setTodos(todos)
	})
}

export default todoModel