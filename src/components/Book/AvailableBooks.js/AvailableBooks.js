import BookItem from '../BookItem/BookItem';

import classes from './AvailableBooks.module.css';

// const array = [
//     {
//         id: 'b1',
//         title: 'asfas',
//         author: 'assssfssfsffsa',
//         price: 'asdfsdfsfsasf',
//         imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
//     },
//     {
//         id: 'b2',
//         title: 'asfssssfsdfas',
//         author: 'asfsa',
//         price: 'asdfasf',
//         imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
//     },
//     {
//         id: 'b3',
//         title: 'asfssssssas',
//         author: 'asfssssa',
//         price: 'asdfasf',
//         imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
//     },
//     {
//         id: 'b4',
//         title: 'asfadfdfdfdfs',
//         author: 'asffdffddsa',
//         price: 'asdfasf',
//         imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
//     },
//     {
//         id: 'b5',
//         title: 'asfas',
//         author: 'asfsa',
//         price: 'asdfasf',
//         imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
//     },
//     {
//         id: 'b5',
//         title: 'asfas',
//         author: 'asfsa',
//         price: 'asdfasf',
//         imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
//     },
//     {
//         id: 'b5',
//         title: 'asfas',
//         author: 'asfsa',
//         price: 'asdfasf',
//         imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
//     },
// ];

const AvailableBooks = ({ books }) => {
    console.log(books);
    return (
        <ul className={classes.books}>
            {books.map(book =>
                <BookItem key={book.id} book={book} />
            )}
        </ul>
    );
};

export default AvailableBooks;