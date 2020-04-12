import * as firebase from 'firebase'
import initializeDb from './initializeDb'

// This is a firebase config template.
// You need to create your own firebase project and firebase realtime database,
// after everything is ready you need to adjust this template accordingly.
const firebaseConfig = {
  // apiKey: "api-key",
  // authDomain: "project-id.firebaseapp.com",
  // databaseURL: "https://project-id.firebaseio.com",
  // projectId: "project-id",
  // storageBucket: "project-id.appspot.com",
  // messagingSenderId: "sender-id",
  // appId: "app-id",
  // measurementId: "G-measurement-id"
}

firebase.initializeApp(firebaseConfig)

// In order anonymous authorization to work, you need to enable that also in your firebase project
firebase.auth().signInAnonymously()

const dbRef = firebase.database().ref()

export default dbRef

// Uncomment initializeDb() if you want to initialize the database on firebase for the first time
// initializeDb()