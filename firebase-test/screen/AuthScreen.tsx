import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Button, Alert, View } from 'react-native'
import { useAuth } from '../context/AuthContext'
import * as firebase from 'firebase';
import HomeScreen from './HomeScreen';

const AuthScreen = () => {

	const auth = useAuth()
	const [isRegister, setIsRegister] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onPressAuth = async () => {
		if (!email || !password) {
			Alert.alert("Please fill in the fields")
			return
		}

		if (isRegister) {
			try {
				await auth.register(email, password)
				Alert.alert("Account was created")
				setEmail('')
				setPassword('')
			} catch (e) {
				Alert.alert(e)
			}
		}

		if (!isRegister) {
			try {
				await auth.signIn(email, password)
			} catch (e) {
				// e.code = "auth/user-not-found"
				// e.message = "There is no user record corresponding to this identifier. The user may have been deleted."
				if (e.code === "auth/user-not-found") {
					Alert.alert('Ce compte n\'existe pas')
				}
				else {
					Alert.alert(e.message)
					console.warn(e.code)
				}
			}
		}
	}

	const toggleRegister = () => {
		setIsRegister(!isRegister)
	}

	const onPressCheckConnexion = () => {
		const currentUser = firebase.auth().currentUser
		if (currentUser) {
			Alert.alert("Vous êtes connecté en tant que " + currentUser.email)
		} else {
			Alert.alert("Pas connecté")
		}
	}

	return <>
		<Text style={styles.label}>
			EMAIL
		</Text>
		<TextInput value={email} onChangeText={setEmail} style={styles.input} />
		<Text style={styles.label}>
			PASSWORD
		</Text>
		<TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry={true} />
		<View style={styles.logInButton}>
			<Button title={isRegister ? 'Register' : 'Log In'} onPress={onPressAuth} />
		</View>

		<Text style={styles.label}>
			{isRegister ? 'Already have an account ? ' : 'You don\'t have an account?'}
		</Text>
		<Button title={isRegister ? 'Log in here ' : 'Register here'} onPress={toggleRegister} />

		<Button title="check connexion" onPress={onPressCheckConnexion} />
	</>
}


const styles = StyleSheet.create({
	title: {
		fontSize: 40,
		fontWeight: "700",
		marginBottom: 16
	},
	label: {
		fontSize: 16,
	},
	input: {
		width: 200,
		fontSize: 24,
		borderWidth: 1,
		marginBottom: 16
	},
	logInButton: {
		marginBottom: 32
	}
});


export default AuthScreen