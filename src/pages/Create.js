import { useHistory } from "react-router-dom";

import { Fragment, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import BookCreate from "../components/Book/CreateAndUpdateBook/BookCreate";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Create = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    
    const createDataHandler = async (createdData) => {
        console.log(createdData);
        try {
            setLoading(true);
            await addDoc(collection(db, 'books'), {
                ...createdData,
                credentials: {
                    email: auth.currentUser.email,
                    id: auth.currentUser.uid
                }
            });
            history.push('/books');
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