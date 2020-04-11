import * as firebase from 'firebase'
import initializeDb from './initializeDb'

const firebaseConfig = {
  apiKey: "AIzaSyDge3n9WM_smJb0BKxUBpLVgUZsX-AkGSs",
  authDomain: "dex-portfolio.firebaseapp.com",
  databaseURL: "https://dex-portfolio.firebaseio.com",
  projectId: "dex-portfolio",
  storageBucket: "dex-portfolio.appspot.com",
  messagingSenderId: "214225539606",
  appId: "1:214225539606:web:7172c3900ff52d36325b37",
  measurementId: "G-YFD1DJNJFT"
};

firebase.initializeApp(firebaseConfig)
firebase.auth().signInAnonymously()

const dbRef = firebase.database().ref()

export default dbRef

// Uncomment initializeDb() if you want to initialize the database on firebase for the first time
// initializeDb()