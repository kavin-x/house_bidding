import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD3lfnYrWRhI8EnhUsONvL2pXJ-o3W5MKg",
  authDomain: "house-bidding-ed8ed.firebaseapp.com",
  projectId: "house-bidding-ed8ed",
  storageBucket: "house-bidding-ed8ed.appspot.com",
  messagingSenderId: "227285375621",
  appId: "1:227285375621:web:9b0b5e274db670815d67ec",
  measurementId: "G-7MTT7C7YT1"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseapp);

export const createAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return

    await createUserWithEmailAndPassword(auth,email,password).then(() => { 
        alert("account has been created successfully")});
}

export const signInUserWithEmailAndPassword = async(email,password) =>{
    if(!email || !password) return

    await signInWithEmailAndPassword(auth,email,password).then((UserCredential) => {
        const h = UserCredential.user;
        console.log(h);
    })
}

export const signOutUser = async() => { signOut(auth).then(() => console.log("signed out") ) }



