import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDm_GnFPQq00gfzJpOJhmt725VG5jN-4ro",
    authDomain: "fir-crud-62760.firebaseapp.com",
    databaseURL: "https://fir-crud-62760.firebaseio.com",
    projectId: "fir-crud-62760",
    storageBucket: "fir-crud-62760.appspot.com",
    messagingSenderId: "503650846886",
    appId: "1:503650846886:web:eb54b2006ae99c128a8c67",
    measurementId: "G-Y494G4115S"
};
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();