import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../../firebase-config';
import classes from './BookCreate.module.css';

const BookCreate = () => {
    const submitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const enteredTitle = formData.get('title').trim();
        const enteredAuthor = formData.get('author').trim();
        const enteredImageUrl = formData.get('image-url').trim();
        const enteredGenre = formData.get('genre').trim();
        const enteredDescription = formData.get('description').trim();
        const enteredPrice = formData.get('price').trim();
        const enteredState = formData.get('state').trim();

        const postsCollectionRef = collection(db, 'books');

        try {
            await addDoc(postsCollectionRef, {
                title: enteredTitle,
                author: enteredAuthor,
                imageUrl: enteredImageUrl,
                genre: enteredGenre,
                description: enteredDescription,
                price: enteredPrice,
                enteredState: enteredState,
                author: {
                    email: auth.currentUser.email,
                    id: auth.currentUser.uid
                }
            });
        } catch (error) {
            console.log('CREATE CATCH ERROR');
            console.log(error.message);
        }
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
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
                <button className='btn'>Create</button>
            </div>
        </form>
    );
};

export default BookCreate;