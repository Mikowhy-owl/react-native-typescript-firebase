import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJ-ExFaBCxR3-BvkY2Pp8OZKWf_V-2KjY",
  authDomain: "rn-typescript-redux-firebase.firebaseapp.com",
  databaseURL: "https://rn-typescript-redux-firebase.firebaseio.com",
  projectId: "rn-typescript-redux-firebase",
  storageBucket: "rn-typescript-redux-firebase.appspot.com",
  messagingSenderId: "1035661310569",
  appId: "1:1035661310569:web:308c26fc50ad597949c0f8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
