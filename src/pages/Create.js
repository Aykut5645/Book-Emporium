import { Fragment, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import BookCreate from "../components/Book/CreateAndUpdateBook/BookCreate";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Create = () => {
    const [loading, setLoading] = useState(false);
    
    const inputHandler = async (data) => {
        const postsCollectionRef = collection(db, 'books');
        try {
            setLoading(true);
            await addDoc(postsCollectionRef, {
                ...data,
                contacts: auth.currentUser.email,
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
        setLoading(false);
    };

    return (
        <Fragment>
            {loading && <LoadingSpinner />}
            {!loading && <BookCreate onInput={inputHandler} />}
        </Fragment>
    );
};

export default Create;