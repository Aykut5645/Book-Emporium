import { useState } from 'react';
import { useHistory, Prompt } from 'react-router-dom';

import classes from './SearchBookBar.module.css';

const SearchBookBar = props => {
    const [isEntering, setIsEntering] = useState(false);
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

    const focusHandler = () => {
        setIsEntering(true);
    };

    return (
        <>
            <Prompt
                when={isEntering}
                message={() => 'Are you sure that you want to leave? All your changes and entered data can be lost!'
                }
            />
            <form method="GET" onSubmit={submitHandler} onFocus={focusHandler} className={classes.searching}>
                <h2>Search Books</h2>
                <div className={classes.search}>
                    <label htmlFor="search">Search by title and author</label>
                    <input id="search" type="text" name="search" placeholder="Search by title and author..." />
                </div>
                <div className={classes.from}>
                    <label htmlFor="from">Price from</label>
                    <input id="from" type="number" name="from" placeholder="Price from..." />
                </div>
                <div className={classes.to}>
                    <label htmlFor="to">Price to</label>
                    <input id="to" type="number" name="to" placeholder="Price to..." />
                </div>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </>
    );
};

export default SearchBookBar;