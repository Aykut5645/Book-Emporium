import { Fragment, useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import AuthProfile from "../components/Auth/AuthProfile/AuthProfile";
import AvailableBooks from "../components/Book/AvailableBooks.js/AvailableBooks";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Profile = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        console.log('ssss');
        (async () => {
            const data = await getDocs(collection(db, 'books'));
            setLoading(false);
            setBooks(data.docs.filter(doc => auth.currentUser.uid === doc.data().credentials.id));
        })();
    }, []);

    return (
        <Fragment>
            {loading && <LoadingSpinner />}
            {!loading && (
                <>
                    <AuthProfile />
                    <AvailableBooks books={books} />
                </>
            )}
        </Fragment>
    );
};

export default Profile;