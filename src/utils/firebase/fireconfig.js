// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// import { auth,EmailAuthProvider,signInWithPopup,GoogleAuthProvider, getAuth} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyA6x3cqPzA1S3BtB0IQ4gZLKfPegQ77-VM",
//   authDomain: "clothing-app-3d21a.firebaseapp.com",
//   databaseURL: "https://clothing-app-3d21a-default-rtdb.firebaseio.com",
//   projectId: "clothing-app-3d21a",
//   storageBucket: "clothing-app-3d21a.appspot.com",
//   messagingSenderId: "834982151023",
//   appId: "1:834982151023:web:007aab081306a95dc29e9a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
import {
    signInWithGooglePop,
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { queries } from "@testing-library/react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC7ALeuS4cdnoYc17Ji8UPzvG3IGN4nfVE",
//   authDomain: "my-first-project-14fd8.firebaseapp.com",
//   projectId: "my-first-project-14fd8",
//   storageBucket: "my-first-project-14fd8.firebasestorage.app",
//   messagingSenderId: "519611903635",
//   appId: "1:519611903635:web:a0dc2f1590deabc73ce766",
//   measurementId: "G-NRX6R2TVQ5"
// };

// Initialize Firebase


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6x3cqPzA1S3BtB0IQ4gZLKfPegQ77-VM",
    authDomain: "clothing-app-3d21a.firebaseapp.com",
    databaseURL: "https://clothing-app-3d21a-default-rtdb.firebaseio.com",
    projectId: "clothing-app-3d21a",
    storageBucket: "clothing-app-3d21a.appspot.com",
    messagingSenderId: "834982151023",
    appId: "1:834982151023:web:007aab081306a95dc29e9a"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'

})

// const provider = new  GoogleAuthProvider()

export const authe = getAuth(app);
export const db = getFirestore()

export const getCategoriesAndDocuments = async(collectionKey) => {
    const collectionRef = collection(db, 'Categories');

    const document = doc(collectionRef, 'hats')
    const docRef = query(collectionRef);

    const querySnapshot = await getDocs(collectionRef)
        // console.log(querySnapshot.data)
    const CategoriesMap = querySnapshot.docs.reduce((acc, doc) => {

        const { title, items } = doc.data();
        acc[title.toLowerCase()] = items;
        return acc

    }, {});


    return CategoriesMap;

}

export const addingCollectionAndDocument = async(collectionKey, objectsToAdd) => {
    console.log(objectsToAdd)
    const collectionRef = collection(db, collectionKey);
    console.log("here is error")
    const batch = writeBatch(db)
    objectsToAdd.forEach((element) => {
        const decref = doc(collectionRef, element.title.toLowerCase());
        batch.set(decref, element);
    });
    await batch.commit();
    console.log('done')

}

export const signInWithGooglePopup = () => signInWithPopup(authe, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(authe, provider);

export const createUseDocumentFromAuth = async(
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};
// export const  createUseDocumentFromAuth = async (userAuth,additional_info={}) => {
//   // console.log(userAuth);
//   // console.log(additional_info)
//   const userDocRef =  doc(db,'users',userAuth.uid);
//   // console.log(userDocRef);
//   const {id}  = userAuth;
//   const userSnapShot  =  await getDoc(userDocRef)
//   // console.log(userSnapShot);
//   if(!userSnapShot.exists()){
//     const {displayName,email} = userAuth;
//     const createAt = new Date();
//     // console.log('user already exiest');
//     try{
//       await setDoc(userDocRef,{
//         displayName,email,createAt,...additional_info,});
//         console.log(userDocRef);
//     // console.log('user created');


//     }catch(error){
//       console.log('error creating the use',error.message);

//     }
//   }
//   return userDocRef;
// }



export const CreateUserWithemailpassword = async(email, password) => {

    if (email && password) {
        return await createUserWithEmailAndPassword(authe, email, password);

        // const userDocRef =  doc(db,'users')
    }
    console.log('user dosenot created')

}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(authe, email, password);
};
export const singOutHandlerOption = async() => await signOut(authe);


export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(authe, callback);
}