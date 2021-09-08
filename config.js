import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

    apiKey: "AIzaSyCIKh82LOT3ShYzbkV4tBA5QlA5dZhzWkg",
    authDomain: "classtest-ab4ab.firebaseapp.com",
    projectId: "classtest-ab4ab",
    storageBucket: "classtest-ab4ab.appspot.com",
    messagingSenderId: "704831863478",
    appId: "1:704831863478:web:956156d3c8465b5aabc417"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();