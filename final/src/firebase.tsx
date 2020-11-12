import { Firebase } from "@ionic-native/firebase";
import firebase from "firebase/app"

const config = {
    apiKey: "AIzaSyCTKLzLw0sr-OLq9pHEjZ6TC3FyOW2yWg8",
    authDomain: "ionic-project-cdab5.firebaseapp.com",
    databaseURL: "https://ionic-project-cdab5.firebaseio.com",
    projectId: "ionic-project-cdab5",
    storageBucket: "ionic-project-cdab5.appspot.com",
    messagingSenderId: "823784834378",
    appId: "1:823784834378:web:3c6c634e190127998c2db3",
    measurementId: "G-SGQETDJVM1"
  };

firebase.initializeApp(config);
export default firebase;