import React from 'react'
import { StyleSheet, Text } from 'react-native';

type Props = {
}

const Header: React.FC<Props> = () => {
	return (
		<>
			<Text style={styles.todo}>TO DO</Text>
		</>
	)
}

const styles = StyleSheet.create({
	todo: {
		padding: 16,
		fontSize: 50,
		fontWeight: '800'
	},
});

export default Header