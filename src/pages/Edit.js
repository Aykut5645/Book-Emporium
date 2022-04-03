import { useHistory } from "react-router-dom";

import BookEdit from "../components/Book/CreateAndUpdateBook/BookEdit";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

// import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Edit = () => {
    const history = useHistory();
    
    const modifyDataHandler = async (modifiedData) => {
        try {
            await updateDoc(
                doc(db, 'books', modifiedData.id),
                modifiedData
            );
            history.push('/books');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <BookEdit onModifyData={modifyDataHandler} />
    );
};

export default Edit;