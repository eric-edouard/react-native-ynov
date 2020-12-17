import { Action, action, Thunk, thunk } from 'easy-peasy'
import firebase from '../../firebase/firebase'
import { StoreModel } from '.'

type Todo = {
	id: string
	isDone: boolean
	task: string
}

type TodoRemote = Omit<Todo, 'id'>

export interface TodoModel {
	/**
	 * State: raw data that will be used by the app
	 */
	todos: Todo[]

	/**
	 * Actions: functions that wil directly modify the state
	 */
	setTodos: Action<TodoModel, Todo[]>

	/**
	 * Thunks: functions that call actions
	 */
	fetchTodos: Thunk<TodoModel, void, void, StoreModel, Promise<void>>
	createTodo: Thunk<TodoModel, { task: string }, void, StoreModel, Promise<void>>
	setDone: Thunk<TodoModel, { id: string, isDone: boolean }, void, StoreModel, Promise<void>>
}

const todoModel: TodoModel = {
	todos: [],

	setTodos: action((state, payload) => {
		return ({ todos: [...payload] })
	}),

	fetchTodos: thunk(async (actions, payload, { getState, getStoreActions }) => {
		const snapShot = await firebase.firestore().collection('todos').get()
		const todos = snapShot.docs.map(d => {
			return ({ ...d.data(), id: d.id }) as Todo
		})
		console.log({ todos })
		actions.setTodos(todos)
	}),

	createTodo: thunk(async (actions, payload, { getState }) => {
		const { task } = payload

		// Create the remote todo object
		const todoRemote: TodoRemote = {
			task,
			isDone: false,
		}

		// Create the todo on the server side
		const res = await firebase.firestore().collection('todos').add(todoRemote)

		// Create the local todo object

		const todo: Todo = {
			...todoRemote,
			id: res.id
		}

		// add it to the current state
		actions.setTodos([...getState().todos, todo])
	}),

	setDone: thunk(async (actions, payload, { getState }) => {
		const { id, isDone } = payload
		const todos = getState().todos

		const index = todos.findIndex(t => t.id === id)
		todos[index].isDone = isDone
		actions.setTodos(todos)

		await firebase.firestore().collection('todos').doc(id).update({ isDone })
	})

}

export default todoModel