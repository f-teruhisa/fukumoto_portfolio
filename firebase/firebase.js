import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDMg7BGy1b92aL-XTROTM34LduL3GH4Kcw",
  authDomain: "fukumoto-portfolio.firebaseapp.com",
  databaseURL: "https://fukumoto-portfolio.firebaseio.com",
  projectId: "fukumoto-portfolio",
  storageBucket: "fukumoto-portfolio.appspot.com",
  messagingSenderId: "542050596861",
  appId: "1:542050596861:web:963e602f4ee6d9c8e1cb94"
}

firebase.initializeApp(config);
