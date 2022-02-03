import BookCreate from "../components/Book/BookCreate/BookCreate";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Create = () => {
    const inputHandler = async (data) => {
        const postsCollectionRef = collection(db, 'books');
        try {
            await addDoc(postsCollectionRef, {
                ...data,
                credentials: {
                    email: auth.currentUser.email,
                    id: auth.currentUser.uid
                }
            });
            console.log('CREATED!!!');
        } catch (error) {
            console.log('IN CATCH BLOCK => CREATE PAGE');
            console.log(error.message);
        }
    };

    return (
        <BookCreate onInput={inputHandler} />
    );
};

export default Create;