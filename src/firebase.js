import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDgEFhcqSOWfB1oDnMIhDeD6a9SuJodBQ8",
    authDomain: "disney-clone-a2f63.firebaseapp.com",
    projectId: "disney-clone-a2f63",
    storageBucket: "disney-clone-a2f63.appspot.com",
    messagingSenderId: "818989561302",
    appId: "1:818989561302:web:b61f26903854993f1fe077",
    measurementId: "G-PKG9QXE2DP"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;