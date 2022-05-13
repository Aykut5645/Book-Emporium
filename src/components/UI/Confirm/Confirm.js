import { useHistory } from "react-router-dom";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Confirm = props => {
    const history = useHistory();

    const deleteBook = async () => {
        await deleteDoc(
            doc(db, 'books', props.bookId)
        );
        history.push('/profile');
    };

    return (
        <Modal onHideConfirm={props.hideConfirm}>
            <h2>Are you sure that you want to delete this book?</h2>
            <div>
                <Button onClick={deleteBook}>Yes</Button>
                <Button onClick={props.hideConfirm}>No</Button>
            </div>
        </Modal>
    );
};

export default Confirm;