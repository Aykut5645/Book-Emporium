import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const Modal = props => {
    return (
        <Fragment>
            <Backdrop onHideCart={props.onHideCart} />,
            {createPortal(
                <ModalOverlay>
                    {props.children}
                </ModalOverlay>,
                document.getElementById('overlays')
            )}
        </Fragment>
    );
};

export default Modal;