import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {getDatabase, ref} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCvq7gIGLzFTrRh4WAUlQauqqfrMibNikQ",
  authDomain: "react-b17b8.firebaseapp.com",
  projectId: "react-b17b8",
  storageBucket: "react-b17b8.appspot.com",
  messagingSenderId: "377697498198",
  appId: "1:377697498198:web:6171b9442f717a3d1db7f7"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)