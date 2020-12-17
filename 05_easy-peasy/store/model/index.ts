import theme, { ThemeModel } from './theme'
import language, { LanguageModel } from './language'
import todos, { TodoModel } from './todos'

export interface StoreModel {
	theme: ThemeModel
	language: LanguageModel
	todos: TodoModel
}

const storeModel: StoreModel = {
	theme,
	language,
	todos
}

export default storeModel