import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASE_URL
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
