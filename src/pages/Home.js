import { Link } from 'react-router-dom';

import BookSummary from "../components/Book/BookSummary/BookSummary";
import Button from '../components/UI/Button/Button';

const Home = () => {
    return (
        <div className={'initial-image'}>
            <BookSummary />
            <Link to="/books">
                <Button className="initial-btn">See Available Books</Button>
            </Link>
        </div>
    );
};

export default Home;