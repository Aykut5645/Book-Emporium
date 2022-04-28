import { useHistory } from 'react-router-dom';

import classes from './SearchBookBar.module.css';

const SearchBookBar = props => {
    const history = useHistory();
    const submitHandler = event => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const searchValue = formData.get('search').trim();
        const searchFrom = formData.get('from').trim();
        const searchTo = formData.get('to').trim();

        props.onSearch({
            search: searchValue,
            from: Number(searchFrom),
            to: Number(searchTo)
        });

        history.push({
            pathname: '/books',
            search: `?search=${searchValue || ''}&from=${searchFrom || ''}&to=${searchTo || ''}`
        });
    };

    return (
        <form method="GET" onSubmit={submitHandler} className={classes.example}>
            <h2>Search Boooks</h2>
            <input type="text" name="search" placeholder="Search by title and author..." />
            <span>{'=>'}</span>
            <input type="number" name="from" placeholder="Price from..." />
            <span>-</span>
            <input type="number" name="to" placeholder="Price to..." />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form >
    );
};

export default SearchBookBar;