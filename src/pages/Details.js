import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import BookDetails from "../components/Book/BookDetails/BookDetails";

import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";

const Details = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const bookId = useParams().bookId;

    useEffect(() => {
        setLoading(true);
        (async () => {
            const book = await getDoc(doc(db, 'books', bookId));
            setBook({
                id: book.id,
                ...book.data()
            });
            setLoading(false);
        })();
    }, [bookId]);

    return (
        <BookDetails book={book} loading={loading} />
    );
};

export default Details;