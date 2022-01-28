import BookSummary from "../components/Book/BookSummary/BookSummary";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={'initial-image'}>
            <BookSummary />
            <Link to="/profil">PROFILE</Link>
        </div>
    );
};

export default Home;

/*
<div
    style={{
        backgroundImage: `url(${booksImage})`,
        height: '100vh',
        width: '100%',
        display: 'inline-block'
    }}>
    <BookSummary />
</div>
*/