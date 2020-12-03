import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { MainStackParamList } from '../routers/MainRouter';
import services from '../services';
import { Note } from '../types/types';

type Props = {
	navigation: StackNavigationProp<MainStackParamList, 'HomeScreen'>
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {

	const auth = useAuth()
	const [notes, setNotes] = useState<Note[]>([])

	useEffect(() => {
		services.notes.getNotes().then(_notes => setNotes(_notes))
	}, [])

	const onPressLogOut = () => {
		auth.signOut()
	}

	const onPressNote = (id: string) => {
		const note = notes.find(n => n.id === id)
		if (note)
			navigation.navigate('NoteScreen', { note })
	}

	const onPressAdd = async () => {
		const note = await services.notes.createNote("NEW NOTE")
		setNotes([...notes, note])
	}

	return <SafeAreaView>
		<Text style={styles.title}>
			Welcome, {auth.user?.email}
		</Text>
		<FlatList
			data={notes}
			renderItem={({ item, index }) => {
				return <TouchableOpacity onPress={() => onPressNote(item.id!)}>
					<Text numberOfLines={1} >{new Date(item.createdAt).toLocaleDateString()}</Text>
					<Text numberOfLines={1} >{item.text}</Text>
				</TouchableOpacity>
			}}
			ListFooterComponent={<Button title="add note" onPress={onPressAdd} />}
		/>

		<Button title={'Log out'} onPress={onPressLogOut} />
	</SafeAreaView>
}


const styles = StyleSheet.create({
	title: {
		fontSize: 40,
		fontWeight: "700",
		marginBottom: 16
	},
	content: {
		// borderWidth: 1,
		flex: 1
	},
	input: {
		height: 500,
		width: 300,
		fontSize: 24,
		borderWidth: 1,
		marginBottom: 16
	},
});


export default HomeScreen