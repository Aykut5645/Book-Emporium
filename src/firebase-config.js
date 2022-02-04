// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsjXKGZ1q93KkNzDH6DgHfL8yi5OtuLyM",
    authDomain: "bookemporium-project.firebaseapp.com",
    projectId: "bookemporium-project",
    storageBucket: "bookemporium-project.appspot.com",
    messagingSenderId: "728085645064",
    appId: "1:728085645064:web:9a5e66b4f2dbc591940ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = getStorage();

export const db = getFirestore(app);
export const auth = getAuth(app);

// storage
// export const upload = async (file, currentUser) => {
//     const fileRef = ref(storage, currentUser.uid + '.jpeg');

//     setLoading(true);
//     const snapshot = await uploadBytes(fileRef, file);
//     const photoUrl = await getDownloadURL(fileRef);

//     updateProfile(currentUser, { photoUrl });
//     setLoading(false);
//     alert('Uploaded file!!!');
// };