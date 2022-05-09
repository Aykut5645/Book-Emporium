import { Fragment, useState, useEffect } from "react";

import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase-config";

import AvailableBooks from "../components/Book/AvailableBooks.js/AvailableBooks";
import SearchBookBar from "../components/Book/SearchBookBar.js/SearchBookBar";
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

const Books = () => {
    let [books, setBooks] = useState([]);
    const [searchData, setSearchData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const data = await getDocs(collection(db, 'books'));
            setBooks(
                data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            );
            setLoading(false);
        })();
    }, []);

    const searchHandler = searchData => {
        setSearchData(searchData);
    };

    if (searchData.search) {
        let names = books.filter(book => book.title.toLocaleLowerCase().includes(searchData.search.toLocaleLowerCase()));
        let authors = books.filter(book => book.author.toLocaleLowerCase().includes(searchData.search.toLocaleLowerCase()));

        books = [...names, ...authors];
    }
    if (searchData.from) {
        books = books.filter(book => book.price >= searchData.from);
    }
    if (searchData.to) {
        books = books.filter(book => book.price <= searchData.to);
    }

    return (
        <Fragment>
            <SearchBookBar onSearch={searchHandler} />
            <AvailableBooks books={books} loading={loading}/>
        </Fragment>
    );
};

export default Books;