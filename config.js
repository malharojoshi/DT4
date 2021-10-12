
import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCFVZTaFMMg7bHqpkvvmeYR25wW-MVUgBU",
    authDomain: "dynamic-timetable-aca05.firebaseapp.com",
    projectId: "dynamic-timetable-aca05",
    storageBucket: "dynamic-timetable-aca05.appspot.com",
    messagingSenderId: "3042810243031",
    appId: "1:304281024303:web:0aa667c8ea42fe7a7613da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();