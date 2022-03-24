import { Fragment } from "react";

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import BookDetails from "../components/Book/BookDetails/BookDetails";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";

const Details = () => {
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const bookId = useParams().bookId;

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const book = await getDoc(doc(db, 'books', bookId));
            setIsLoading(false);
            setBook({
                id: book.id,
                ...book.data()
            });
        })();
    }, [bookId]);

    return (
        <Fragment>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <BookDetails book={book} />}
            {/* <h1>DSAFSADFASDFSADFSFD</h1> */}
        </Fragment>
    );
};

export default Details;