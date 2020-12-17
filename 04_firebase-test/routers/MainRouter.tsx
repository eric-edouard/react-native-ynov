import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Note } from '../types/types';
import AuthScreen from '../screen/AuthScreen';
import HomeScreen from '../screen/HomeScreen';
import NoteScreen from '../screen/NoteScreen';
import { useAuth } from '../context/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';

export type MainStackParamList = {
	AuthScreen: undefined
	HomeScreen: undefined
	NoteScreen: { note: Note }
}

const Stack = createStackNavigator<MainStackParamList>();

export default function MainRouter() {

	const auth = useAuth()

	const renderRoutes = () => {
		if (!auth.isSignedIn) 
			return <Stack.Screen name="AuthScreen" component={AuthScreen} />
		
		if (auth.isSignedIn)
			return <>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="NoteScreen" component={NoteScreen} />
			</>
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{renderRoutes()}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
