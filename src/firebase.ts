import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

// Initialize Firebase Analytics
const analytics = getAnalytics(firebaseApp)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp)
