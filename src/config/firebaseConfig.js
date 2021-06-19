import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDmjQAE67Rglw3l-zMMAKaMPsXySsCBSDA",
    authDomain: "socialauth-3e1b6.firebaseapp.com",
    projectId: "socialauth-3e1b6",
    storageBucket: "socialauth-3e1b6.appspot.com",
    messagingSenderId: "109418646701",
    appId: "1:109418646701:web:59a5dba6943a1db2c98a24",
    measurementId: "G-SQHTVGWW4J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {firebase, db, auth, storage};
