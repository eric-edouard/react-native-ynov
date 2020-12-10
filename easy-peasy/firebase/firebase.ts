import * as firebase from 'firebase';

// Optionally import the services that you want to use
// import "firebase/auth";
import "firebase/firestore";
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBxTtoKsI-dEDM-kvxljscWKwdmYUnDRAk",
	authDomain: "ynov-react-native.firebaseapp.com",
	projectId: "ynov-react-native",
	storageBucket: "ynov-react-native.appspot.com",
	messagingSenderId: "890304500881",
	appId: "1:890304500881:web:d73369ae56125b69519b30"
};

firebase.initializeApp(firebaseConfig);
console.log("firebase init done")
export default firebase