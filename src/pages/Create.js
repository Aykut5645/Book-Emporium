import { Fragment, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import BookCreate from "../components/Book/CreateAndUpdateBook/BookCreate";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Create = () => {
    const [loading, setLoading] = useState(false);
    
    const createDataHandler = async (createdData) => {
        console.log('createdsdfsafsf')
        const postsCollectionRef = collection(db, 'books');
        
        try {
            setLoading(true);
            await addDoc(postsCollectionRef, {
                ...createdData,
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
            {!loading && <BookCreate onCreateData={createDataHandler} />}
        </Fragment>
    );
};

export default Create;