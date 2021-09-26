import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseApp = initializeApp({
  projectId: 'fire-commerce-ccfb0',
  appId: '1:90074953970:web:ab14e3518724d8d4aab86b',
  databaseURL: 'https://fire-commerce-ccfb0-default-rtdb.firebaseio.com',
  storageBucket: 'fire-commerce-ccfb0.appspot.com',
  apiKey: 'AIzaSyBY9aZHTFJYk_weNXgtxp4ZE1YuNQD2mFo',
  authDomain: 'fire-commerce-ccfb0.firebaseapp.com',
  messagingSenderId: '90074953970',
})

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

if (!process.env.PRODUCTION) {
  connectAuthEmulator(auth, 'http://localhost:9099', {
    disableWarnings: true,
  })
  connectFirestoreEmulator(firestore, 'localhost', 8080)
}

export { auth, firestore, storage }
