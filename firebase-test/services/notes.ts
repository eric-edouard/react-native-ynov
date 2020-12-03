import * as firebase from 'firebase';
import { NOTES_COLLECTION, USERS_COLLECTION } from '../constants';
import { Note } from '../types/types';

const notes = () => firebase
	.firestore()
	.collection(USERS_COLLECTION)
	.doc(firebase.auth().currentUser?.uid)
	.collection(NOTES_COLLECTION)

export const getNotes: () => Promise<Note[]> = async () => {
	const querySnapshot = await notes().get()
	const docs = querySnapshot.docs

	return docs.map(doc => {
		const data = doc.data() as Note
		return { ...data, id: doc.id }
	})
}

export const createNote: (noteText: string) => Promise<Note> = async (noteText) => {
	const note: Note = {
		createdAt: new Date().getTime(),
		updatedAt: new Date().getTime(),
		text: noteText,
	}
	const doc = await notes().add(note)
	return { ...note, id: doc.id }
}

export const updateNote: (noteId: string, noteText: string) => Promise<void> = async (nodeId, noteText) => {
	await notes().doc(nodeId).update({
		text: noteText,
		updatedAt: new Date().getTime()
	})
}

export const deleteNote: (noteId: string) => Promise<void> = async (noteId) => {
	await notes().doc(noteId).delete()
}
