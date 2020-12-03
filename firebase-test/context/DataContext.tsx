import * as firebase from 'firebase';
import React, { createContext, useContext, useEffect } from 'react';

type AuthContextType = {
	isSignedIn: boolean;
	user?: firebase.User;
	register: (email: string, password: string) => Promise<void>;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
}

const defaultAuthState: AuthContextType = {
	isSignedIn: true,
	register: async () => undefined,
	signIn: async () => undefined,
	signOut: async () => undefined,
}

const AuthContext = createContext<AuthContextType>(defaultAuthState)

export const AuthContextProvider: React.FC = ({ children }) => {

	const [auth, setAuth] = React.useState<{ user?: firebase.User; isSignedIn: boolean }>({
		isSignedIn: false,
	})

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((_user) => {
			console.log("onAuthStateChanged: ", _user)
			if (_user) {
				// user is logged in
				setAuth({
					user: _user,
					isSignedIn: true
				})
			} else {
				// user is logged out
				setAuth({
					user: undefined,
					isSignedIn: false
				})
			}
		})

		return unsubscribe
	}, [])


	const register = async (email: string, password: string) => {
		await firebase.auth().createUserWithEmailAndPassword(email, password)
	}

	const signIn = async (email: string, password: string) => {
		await firebase.auth().signInWithEmailAndPassword(email, password)
	}

	const signOut = async () => {
		await firebase.auth().signOut()
	}

	return (
		<AuthContext.Provider
			value={{
				isSignedIn: auth.isSignedIn,
				user: auth.user,
				register,
				signIn,
				signOut
			}}>
			{children}
		</AuthContext.Provider>
	);

}

export const useAuth = () => {
	const auth = useContext(AuthContext)
	return auth
}
