import BookSummary from "../components/Book/BookSummary/BookSummary";

// import booksImage from '../assets/uU8wbS.jpg';

const Home = () => {
    return (
        <div className={'initial-image'}>
            <BookSummary />
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