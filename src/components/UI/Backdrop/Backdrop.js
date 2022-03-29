import { createPortal } from "react-dom";

import classes from './Backdrop.module.css';

const Backdrop = props => {
    return createPortal(
        <div className={classes.backdrop} onClick={props.onClick}></div>,
        document.getElementById('backdrop')
    );
};

export default Backdrop;