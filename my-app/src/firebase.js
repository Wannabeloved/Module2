// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD1QswOS8NDPolajvmVu5-K3kw8wncxFtU",
	authDomain: "firstfirebaseproject-42025.firebaseapp.com",
	databaseURL:
		"https://firstfirebaseproject-42025-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "firstfirebaseproject-42025",
	storageBucket: "firstfirebaseproject-42025.appspot.com",
	messagingSenderId: "443681685384",
	appId: "1:443681685384:web:c8740d61c8d9bda42ac43d",
	measurementId: "G-EKVFRMXG9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
