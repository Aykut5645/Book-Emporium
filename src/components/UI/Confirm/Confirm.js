import { useHistory } from "react-router-dom";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import classes from './Confirm.module.css';

const Confirm = props => {
    const history = useHistory();

    const deleteBook = async () => {
        await deleteDoc(
            doc(db, 'books', props.bookId)
        );
        history.push('/profile');
    };

    return (
        <Modal className={classes.container} onHideConfirm={props.hideConfirm}>
            <p className={classes.question}>Are you sure that you want to delete this book?</p>
            <div className={classes.buttons}>
                <Button onClick={deleteBook}>Yes</Button>
                <Button onClick={props.hideConfirm}>No</Button>
            </div>
        </Modal>
    );
};

export default Confirm;