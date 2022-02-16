import BookEdit from "../components/Book/CreateAndUpdateBook/BookEdit";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Edit = () => {
    const modifyDataHandler = async (modifiedData) => {
        const currentBookRef = doc(db, 'books', modifiedData.id);
        
        try {
            await updateDoc(currentBookRef, modifiedData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <BookEdit onModifyData={modifyDataHandler}/>
    );
};

export default Edit;