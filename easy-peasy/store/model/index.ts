import themeModel, { ThemeModel } from './theme'
import languageModel, { LanguageModel } from './language'
import todoModel, { TodoModel } from './todos'

export interface StoreModel {
	themeModel: ThemeModel
	languageModel: LanguageModel
	todoModel: TodoModel
}

const storeModel: StoreModel = {
	themeModel,
	languageModel,
	todoModel
}

export default storeModel