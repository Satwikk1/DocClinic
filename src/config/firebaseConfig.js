import firebase from 'firebase'

var firebaseConfig = {
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {firebase, db, auth, storage};
