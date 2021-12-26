import classes from './BookEdit.module.css';

const BookEdit = () => {
    return (
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' />
            </div>
            <div className={classes.control}>
                <label htmlFor='author'>Author</label>
                <input type='text' id='author' />
            </div>
            <div className={classes.control}>
                <label htmlFor='text'>Description</label>
                <textarea id='text' rows='5'></textarea>
            </div>
            <div className={classes.control}>
                <label>Status</label>
                <select>
                    <option value="0">Excellent</option>
                    <option value="1">Very Good</option>
                    <option value="2">Good</option>
                    <option value="3">Bad</option>
                    <option value="4">Very Bad</option>
                </select>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Edit</button>
            </div>
        </form>
    );
};

export default BookEdit;

{/* <div className={classes.loading}>
                <LoadingSpinner />
            </div> */}