import { Link } from 'react-router-dom';

import BookSummary from "../components/Book/BookSummary/BookSummary";

const Home = () => {
    return (
        <div className={'initial-image'}>
            <BookSummary />
        </div>
    );
};

export default Home;