import { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";

import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase-config";

import AvailableBooks from "../components/Book/AvailableBooks.js/AvailableBooks";
import SearchBookBar from "../components/Book/SearchBookBar.js/SearchBookBar";
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

const Books = () => {
    let [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState(null);
    const [loading, setLoading] = useState(true);

    const booksCollectionRef = collection(db, 'books');

    useEffect(() => {
        setLoading(true);
        (async () => {
            const data = await getDocs(booksCollectionRef);
            setLoading(false);
            setBooks(
                data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            );
        })();
    }, []);
    
    const searchHandler = enteredValue => {
        setSearchValue(enteredValue);
    };

    if (searchValue) {
        books = books.filter(book => {
            return book.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        });
    }

    return (
        <Fragment>
            <SearchBookBar onSearch={searchHandler} />
            {loading && <LoadingSpinner />}
            {!loading && <AvailableBooks books={books} />}
        </Fragment>
    );
};

export default Books;