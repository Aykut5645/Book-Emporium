import classes from './BookEdit.module.css';

const BookEdit = () => {
    return (
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' name='title' />
            </div>
            <div className={classes.control}>
                <label htmlFor='author'>Author</label>
                <input type='text' id='author' name='author' />
            </div>
            <div className={classes.control}>
                <label htmlFor='image-url'>ImageUrl</label>
                <input type='text' id='image-url' name='image-url' />
            </div>
            <div className={classes.control}>
                <label htmlFor='genre'>Genre</label>
                <input type='text' id='genre' name='genre' />
            </div>
            <div className={classes.control}>
                <label htmlFor='text'>Description</label>
                <textarea id='text' rows='5' name='description'></textarea>
            </div>
            <div className={classes.inline}>
                <div className={classes.control}>
                    <label htmlFor='price'>Price</label>
                    <input type='number' id='price' name='price' />
                </div>
                <div className={classes.control}>
                    <label>Status</label>
                    <select name='state'>
                        <option value="Excellent">Excellent</option>
                        <option value="Very Good">Very Good</option>
                        <option value="Good">Good</option>
                        <option value="Bad">Bad</option>
                        <option value="Very Bad">Very Bad</option>
                    </select>
                </div>
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