import { initializeApp } from 'firebase/app';
import 'firebase/database';

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

initializeApp(firebaseConfig);