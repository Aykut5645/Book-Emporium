import BookSummary from "../components/Book/BookSummary/BookSummary";

import booksImage from '../assets/uU8wbS.jpg';

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${booksImage})`,
            height: '100vh',
        }}>
            <BookSummary />
        </div>
    );
};

export default Home;