import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCSS26lTXuyh6A5sgBjk0UerPTT1r-E8Ps',
  authDomain: 'catch-of-the-day-mariaga.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-mariaga.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
