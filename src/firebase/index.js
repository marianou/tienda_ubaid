import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB4ccSBIFl6QbSmvLbbm0F0zaPiYo1Cf_Y",
    authDomain: "coderhouse-ecommerce-mu.firebaseapp.com",
    projectId: "coderhouse-ecommerce-mu",
    storageBucket: "coderhouse-ecommerce-mu.appspot.com",
    messagingSenderId: "787370899655",
    appId: "1:787370899655:web:7f4541e41c9145a46fe6e2",
    measurementId: "G-5QBGE5GJ3H"
  });

export function getFirebase(){
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}