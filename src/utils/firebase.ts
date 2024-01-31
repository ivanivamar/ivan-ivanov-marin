import firebase from 'firebase/app'
import initializeApp = firebase.initializeApp

const firebaseConfig = {
    apiKey: 'AIzaSyCNQXwTqmfD0G84rF11bODZ2Qah79rxZvo',
    authDomain: 'ivan-ivanov-marin.firebaseapp.com',
    projectId: 'ivan-ivanov-marin',
    storageBucket: 'ivan-ivanov-marin.appspot.com',
    messagingSenderId: '814878206803',
    appId: '1:814878206803:web:eee4116656ecd55fee8fa6',
    measurementId: 'G-HZ37S288NH'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)