import { Action, action } from 'easy-peasy'

export type ThemeType = 'light' | 'dark'

export type ThemeColors = {
	background: string
	text: string
}

const lightColors: ThemeColors = {
	background: 'white',
	text: 'black'
}

const darkColors: ThemeColors = {
	background: 'black',
	text: 'red'
}

export interface ThemeModel {
	/**
	 * State
	 */
	theme: ThemeType,
	colors: ThemeColors

	/**
	 * Actions
	 */
	setTheme: Action<ThemeModel, ThemeType>
}

const themeModel: ThemeModel = {
	theme: 'light',

	colors: lightColors,

	setTheme: action((state, payload) => {
		return ({ theme: payload, colors: payload === 'light' ? lightColors : darkColors })
	})
}

export default themeModel