import { Action, action } from 'easy-peasy'

export type LanguageType = 'en' | 'fr'

export interface LanguageModel {
	/**
	 * State
	 */
	language: LanguageType

	/**
	 * Actions
	 */
	setLanguage: Action<LanguageModel, LanguageType>
}

const languageModel: LanguageModel = {
	language: 'fr',

	setLanguage: action((state, payload) => {
		return ({ language: payload })
	})
}

export default languageModel