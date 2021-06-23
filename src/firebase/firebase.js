import firebase from "firebase";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAzgLS14tDdtN-8J_PgbGzeOK-GnEZt2Us",
  authDomain: "gio-apps-dev.firebaseapp.com",
  databaseURL: "https://gio-apps-dev.firebaseio.com",
  projectId: "gio-apps-dev",
  storageBucket: "gio-apps-dev.appspot.com",
  messagingSenderId: "781842627898",
  appId: "1:781842627898:web:58c20ebe39f79445212403",
  measurementId: "G-FZ22XWBJ2M",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
