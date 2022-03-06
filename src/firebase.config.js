import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiPRp_LZUY59hSBhU5oWrSnotZwpIthHg',
  authDomain: 'house-marketplace-app-ca609.firebaseapp.com',
  projectId: 'house-marketplace-app-ca609',
  storageBucket: 'house-marketplace-app-ca609.appspot.com',
  messagingSenderId: '416230573655',
  appId: '1:416230573655:web:f1fad76906a443adfa4512',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
