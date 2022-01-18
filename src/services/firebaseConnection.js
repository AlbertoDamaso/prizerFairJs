import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAnTDoGlvNStgUp5JAU9xSurzqgRXiGCco",
    authDomain: "prizefair-eeedb.firebaseapp.com",
    databaseURL: "https://prizefair-eeedb-default-rtdb.firebaseio.com",
    projectId: "prizefair-eeedb",
    storageBucket: "prizefair-eeedb.appspot.com",
    messagingSenderId: "650180459524",
    appId: "1:650180459524:web:bffa67b967a217ef690951",
    measurementId: "G-Y4KB31HEQL"  
  };

  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;