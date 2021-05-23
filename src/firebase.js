import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnxlPQXNc7Bl2OYHwWGAlCUDNO2TsWMJg",
  authDomain: "imessage-indu.firebaseapp.com",
  projectId: "imessage-indu",
  storageBucket: "imessage-indu.appspot.com",
  messagingSenderId: "1090775217406",
  appId: "1:1090775217406:web:ec4cd069a639b2f702e1af"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
