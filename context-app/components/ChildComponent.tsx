import * as React from 'react';
import { Text, StyleSheet } from 'react-native';


type Props = {
	count: number
}

export function ChildComponent(props: Props) {

	React.useEffect(() => {
		console.log("count CHILD changed: ", props.count)
	  }, [props.count])

	return (
		<Text style={styles.count}>Count: {props.count}</Text>
	)
}

const styles = StyleSheet.create({
	count: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'red'
	},
});
