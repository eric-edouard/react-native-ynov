
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useStoreState } from '../store/hooks'

type Props = {
	text: string
}

const Description: React.FC<Props> = (props) => {
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
		fontSize: 30,
		fontWeight: '400'
	}
})

export default Description