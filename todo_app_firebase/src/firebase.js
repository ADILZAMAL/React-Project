import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLEydRQWP6jQrhRVolW3ISko_u7BIS_B4",
  authDomain: "todo-app-firebase-1b08d.firebaseapp.com",
  databaseURL: "https://todo-app-firebase-1b08d.firebaseio.com",
  projectId: "todo-app-firebase-1b08d",
  storageBucket: "todo-app-firebase-1b08d.appspot.com",
  messagingSenderId: "93690707295",
  appId: "1:93690707295:web:ac429b9150e12a4c264aea",
});

const db = firebase.firestore();

export { db };
