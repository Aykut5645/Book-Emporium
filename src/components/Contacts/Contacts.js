import Modal from "../UI/Modal/Modal";

import classes from './Contacts.module.css';

const Contacts = props => {
    return (
        <Modal className={classes.container} onHideContacts={props.onHideContacts}>
            <div className={classes.person}>
                <h2 className={classes.header}>Technical Person:</h2>
                <p><span>Phone: </span>0885635969</p>
                <p><span>Email: </span>mechanic@mechanic.com</p>
                <p className={classes.info}>If you find it difficult to place an order or encounter a technical problem, please contact the technician.</p>
            </div>
            <div className={classes.person}>
                <h2 className={classes.header}>Administrator:</h2>
                <p><span>Phone: </span>0881015249</p>
                <p><span>Email: </span>admin@admin.com</p>
                <p className={classes.info}>If you encounter more complex or more generic issues related to website. Please get in touch with administrator.</p>
            </div>
            <button onClick={props.onHideContacts} className={classes.btn}>
                Close
            </button>
        </Modal>
    );
};

export default Contacts;