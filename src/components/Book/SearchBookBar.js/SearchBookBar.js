import classes from './SearchBookBar.module.css';

const SearchBookBar = props => {
    const submitHandler = event => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const enteredValue = formData.get('search').trim();

        props.onSearch(enteredValue);
    };

    return (
        <form onSubmit={submitHandler} className={classes.example}>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    );
};

export default SearchBookBar;