import BookItem from '../BookItem/BookItem';

// import classes from './AvailableBooks.module.css';

const booksDb = [
    {
        id: 'b1',
        title: 'It',
        author: 'Stephen King',
        price: 20,
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
    },
    {
        id: 'b2',
        title: 'The Jungle Book',
        author: 'Rudyard Kipling',
        price: 19,
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327873594l/77270.jpg'

    }
];

const AvailableBooks = () => {
    const bookList = booksDb.map(book => <BookItem key={book.id} book={book} />);

    return (
        <ul>
            {bookList}
        </ul>
    );
};

export default AvailableBooks;