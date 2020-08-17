import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVxKofGq2B-UHt8mzn4-MDcrGSWdgafpA",
    authDomain: "messengerclone-7f6f7.firebaseapp.com",
    databaseURL: "https://messengerclone-7f6f7.firebaseio.com",
    projectId: "messengerclone-7f6f7",
    storageBucket: "messengerclone-7f6f7.appspot.com",
    messagingSenderId: "163078221066",
    appId: "1:163078221066:web:ab7f7e9a2cec78ad899ef3",
    measurementId: "G-3Y61CSPT3P"
});

const db = firebaseApp.firestore();
export default db;