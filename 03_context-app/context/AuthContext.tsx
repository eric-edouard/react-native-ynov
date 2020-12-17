import React, { createContext, useContext } from 'react';

type AuthContextType = {
	isSignedIn: boolean;
	email?: string;
	signIn: () => void;
	signOut: () => void;
}

const defaultAuthState = {
	isSignedIn: true,
	email: 'test',
	signIn: () => null,
	signOut: () => null,
}

const AuthContext = createContext<AuthContextType>(defaultAuthState)

export const AuthContextProvider: React.FC = ({ children }) => {

	const [auth, setAuth] = React.useState<{ isSignedIn: boolean; email?: string }>({
		isSignedIn: true,
		email: 'test'
	})

	const signIn = () => {
		setAuth({
			isSignedIn: true,
			email: 'test@mail.com'
		})
	}

	const signOut = () => {
		setAuth({
			isSignedIn: false,
			email: undefined
		})
	}

	return (
		<AuthContext.Provider
			value={{
				isSignedIn: auth.isSignedIn,
				email: auth.email,
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
