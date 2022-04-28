import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import PortalContext from '../../../contexts/portal-context/portal-context';

import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const Modal = props => {
    const portalCtx = useContext(PortalContext);

    return (
        <Fragment>
            <Backdrop onClick={portalCtx.hideCart} />,
            {createPortal(
                <div className={classes.modal}>
                    {props.children}
                </div>,
                document.getElementById('overlays')
            )}
        </Fragment>
    );
};

export default Modal;