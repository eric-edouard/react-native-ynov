import firebase from '../firebase/firebase'
import { TodoRemote } from '../types'

export const createTodo = async (todoRemote: TodoRemote) => {
	await firebase.firestore().collection('todos').add(todoRemote)
}

export const setDone = async (id: string, isDone: boolean) => {
	await firebase.firestore().collection('todos').doc(id).update({ isDone })
}