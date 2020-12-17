export type Todo = {
	id: string
	isDone: boolean
	task: string
}

export type TodoRemote = Omit<Todo, 'id'>