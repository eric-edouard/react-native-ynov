import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { MainStackParamList } from '../routers/MainRouter';
import services from '../services';
import { Note } from '../types/types';

type Props = {
	navigation: StackNavigationProp<MainStackParamList, 'NoteScreen'>
	route: RouteProp<MainStackParamList, 'NoteScreen'>
}

const NoteScreen: React.FC<Props> = ({ navigation, route }) => {

	const { note } = route.params
	const [noteText, setNoteText] = useState(note.text)

	useEffect(() => {
		return () => {
			services.notes.updateNote(note.id!, noteText)
		}
	}, [])

	return <SafeAreaView>
		<Text style={styles.date}>
			{new Date(note.createdAt).toLocaleDateString()}
		</Text>
		<TextInput
			value={noteText}
			style={styles.input}
			numberOfLines={10}
			multiline
			onChangeText={setNoteText}
		/>
	</SafeAreaView>
}


const styles = StyleSheet.create({
	date: {
		fontSize: 17,
		fontWeight: "700",
		marginBottom: 16
	},
	input: {
		height: 500,
		width: 300,
		fontSize: 24,
		borderWidth: 1,
		marginBottom: 16
	},
});


export default NoteScreen