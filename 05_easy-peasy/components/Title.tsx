
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useStoreState } from '../store/hooks'

type Props = {
	text: string
}

const Title: React.FC<Props> = (props) => {
	const { colors } = useStoreState(state => state.theme)

	return (<View>
		<Text style={[styles.text, {
			color: colors.text
		}]}>
			{props.text}
		</Text>
	</View>)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 50,
		fontWeight: '800'
	}
})

export default Title