import React, { createContext } from 'react'


type AuthContextType = {
	isSignedIn: boolean;
	email?: string
	signIn: () => void;
	signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
	isSignedIn: false,
	email: undefined,
	signIn: () => null,
	signOut: () => null
})

export default AuthContext