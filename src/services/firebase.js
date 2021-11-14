import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDu9vbLofcOmn_Awvz0If2nm9tI6vDjyGE",
  authDomain: "un64-b4cdb.firebaseapp.com",
  databaseURL: "https://un64-b4cdb-default-rtdb.firebaseio.com",
  projectId: "un64-b4cdb",
  storageBucket: "un64-b4cdb.appspot.com",
  messagingSenderId: "53155195007",
  appId: "1:53155195007:web:ba78c083725cac94f3b74a"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase };