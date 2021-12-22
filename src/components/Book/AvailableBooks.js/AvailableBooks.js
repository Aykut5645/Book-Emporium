import classes from './AvailableBooks.module.css';

const AvailableBooks = () => {
    return (
        <>
            <section className={classes.book}>
                <div class="book-img-wrapper">
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg"
                        alt="" />
                </div>
                <div class="book-content">
                    <div class="content-info">
                        <p><span>Name: It</span></p>
                        <p>Author: Stephen King</p>
                        <p>Price: 20.00</p>
                    </div>
                    <div class="content-input">
                        <label htmlFor="number">Available Count:</label>
                        <input id="number" type="number" value="1" />
                    </div>
                </div>
            </section>
            <section className={classes.book}>
                <div class="book-img-wrapper">
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327873594l/77270.jpg"
                        alt="" />
                </div>
                <div class="book-content">
                    <div class="content-info">
                        <p><span>Name: The Jungle Book</span></p>
                        <p>Author: Rudyard Kipling</p>
                        <p>Price: 20.00</p>
                    </div>
                    <div class="content-input">
                        <label htmlFor="number">Available Count:</label>
                        <input id="number" type="number" value="1" />
                    </div>
                </div>
            </section>
            <section className={classes.book}>
                <div class="book-img-wrapper">
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg"
                        alt="" />
                </div>
                <div class="book-content">
                    <div class="content-info">
                        <p><span>Name: It</span></p>
                        <p>Author: Stephen King</p>
                        <p>Price: 20.00</p>
                    </div>
                    <div class="content-input">
                        <label htmlFor="number">Available Count:</label>
                        <input id="number" type="number" value="1" />
                    </div>
                </div>
            </section>
            <section className={classes.book}>
                <div class="book-img-wrapper">
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg"
                        alt="" />
                </div>
                <div class="book-content">
                    <div class="content-info">
                        <p><span>Name: It</span></p>
                        <p>Author: Stephen King</p>
                        <p>Price: 20.00</p>
                    </div>
                    <div class="content-input">
                        <label htmlFor="number">Available Count:</label>
                        <input id="number" type="number" value="1" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AvailableBooks;