import { Fragment, useState, useEffect } from "react";

import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase-config";

import AvailableBooks from "../components/Book/AvailableBooks.js/AvailableBooks";
import SearchBookBar from "../components/Book/SearchBookBar.js/SearchBookBar";
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

const Books = () => {
    let [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const data = await getDocs(collection(db, 'books'));
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