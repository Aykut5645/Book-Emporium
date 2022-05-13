import { Fragment, useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import AuthProfile from "../components/Auth/AuthProfile/AuthProfile";
import AvailableBooks from "../components/Book/AvailableBooks.js/AvailableBooks";

const Profile = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const data = await getDocs(collection(db, 'books'));
            setBooks(
                data.docs
                    .filter(doc => auth.currentUser?.uid === doc.data().credentials.id)
                    .map(doc => ({ ...doc.data(), id: doc.id }))
            );
            setLoading(false);
        })();
    }, []);

    return (
        <Fragment>
            <AuthProfile loading={loading} />
            <AvailableBooks books={books} loading={loading} />
        </Fragment>
    );
};

export default Profile;