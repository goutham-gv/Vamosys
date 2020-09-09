
import "firebase/auth";
import firebase from 'firebase/app';


let config= {
    apiKey: "AIzaSyDuReOgw3lZTpkRjPqvr3tRcllriry3n4k",
    authDomain: "goutham-13920.firebaseapp.com",
    databaseURL: "https://goutham-13920.firebaseio.com",
    projectId: "goutham-13920",
    storageBucket: "goutham-13920.appspot.com",
    messagingSenderId: "146047857256",
    appId: "1:146047857256:web:b75a5deb7e9bd8162c41dd"
  };

 export default firebase.initializeApp(config);