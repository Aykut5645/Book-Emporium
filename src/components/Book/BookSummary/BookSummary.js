import { Link } from 'react-router-dom';

import Button from '../../UI/Button/Button';

import classes from './BookSummary.module.css';

const BookSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Welcome to BookEmporium!</h2>
            <p>
                Book Emporium is an internet platform that offers mediation between those who sell and those who are looking for books to buy.
            </p>
            <p>
                Here you can find the title you are looking for!
            </p>
            <Link to="/books">
                <Button>See Books</Button>
            </Link>
        </section>
    );
};

export default BookSummary;