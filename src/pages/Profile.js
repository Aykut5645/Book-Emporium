import { Fragment, useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

import AuthProfile from "../components/Auth/AuthProfile/AuthProfile";
import AvailableBooks from "../components/Book/AvailableBooks.js/AvailableBooks";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Profile = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const booksCollectionRef = collection(db, 'books');

    useEffect(() => {
        setLoading(true);
        console.log('ssss');
        (async () => {
            const data = await getDocs(booksCollectionRef);
            setLoading(false);
            console.log(data);
            setBooks(
                data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            );
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