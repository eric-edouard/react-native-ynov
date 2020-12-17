import { Action, action, Thunk, thunk } from 'easy-peasy'
import firebase from '../../firebase/firebase'
import { StoreModel } from '.'
import { Todo, TodoRemote } from '../../types'
import services from '../../services'

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
	listenTodos: Thunk<TodoModel, void, void, StoreModel, () => void>
	createTodo: Thunk<TodoModel, { task: string }, void, StoreModel, Promise<void>>
	setDone: Thunk<TodoModel, { id: string, isDone: boolean }, void, StoreModel, Promise<void>>
}

const todoModel: TodoModel = {
	todos: [],

	setTodos: action((state, payload) => {
		return ({ todos: [...payload] })
	}),

	listenTodos: thunk((actions) => {
		const unsubscribe = firebase.firestore().collection('todos').onSnapshot(
			(onNext) => {
				const todos = onNext.docs.map(d => {
					return ({...d.data(), id: d.id }) as Todo
				})
				actions.setTodos(todos)
			},
			(onError) => console.warn("listenTodos error: ", onError)
		)
		return unsubscribe
	}),

	createTodo: thunk(async (actions, payload, { getState }) => {
		const { task } = payload

		// Create the remote todo object
		const todoRemote: TodoRemote = {
			task,
			isDone: false,
		}

		// Create the todo on the server side
		services.todoService.createTodo(todoRemote)

	}),

	setDone: thunk(async (actions, payload, { getState }) => {
		const { id, isDone } = payload
		services.todoService.setDone(id, isDone)
	})

}

export default todoModel