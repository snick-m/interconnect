import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'

import firebaseConfig from './firebase.config.js'

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

// Initialize Firebase Analytics
const analytics = getAnalytics(firebaseApp)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp)
