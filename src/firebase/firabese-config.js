
import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp  } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

//importamos nuestro configuración
const firebaseConfig = {
    apiKey: "AIzaSyALRJscXRgM1sQL6PFztq7adnugMQLj9LA",
    authDomain: "react-app-project-ed377.firebaseapp.com",
    projectId: "react-app-project-ed377",
    storageBucket: "react-app-project-ed377.appspot.com",
    messagingSenderId: "356014057479",
    appId: "1:356014057479:web:9192e2c04f3da2727be2a2"
};

const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export {
    db,
    googleProvider
}






