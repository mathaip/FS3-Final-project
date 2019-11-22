import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCC7QwWOn_ozAe0Y2MpRXw_9KoNwe-bmwI",
    authDomain: "fullstack-3-project.firebaseapp.com",
    databaseURL: "https://fullstack-3-project.firebaseio.com",
    projectId: "fullstack-3-project",
    storageBucket: "fullstack-3-project.appspot.com",
    messagingSenderId: "486469328562",
    appId: "1:486469328562:web:5d10446b57b08d1fd4f3ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;
