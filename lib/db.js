import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDEwoINUBi4llQVBTX-mbW5j1Vp-nzDl4k",
  authDomain: "scarlettt-6661b.firebaseapp.com",
  databaseURL: "https://scarlettt-6661b.firebaseio.com",
  projectId: "scarlettt-6661b",
  storageBucket: "scarlettt-6661b.appspot.com",
  messagingSenderId: "277446698982"
};

try {
  firebase.initializeApp(config);
} catch(err) {
  if(!/already exists/.test(err.message)) {
    console.error('Firebase error', err.stack);
  }
}

export const auth = firebase.auth();
