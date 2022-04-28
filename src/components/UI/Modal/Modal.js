import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import PortalContext from '../../../contexts/portal-context/portal-context';

import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const Modal = props => {
    const portalCtx = useContext(PortalContext);

    return (
        <Fragment>
            <Backdrop onClick={() => { portalCtx.hideCart(); props.onHideContacts && props.onHideContacts() }} />,
            {createPortal(
                <div className={`${classes.modal} ${props.className}`}>
                    {props.children}
                </div>,
                document.getElementById('overlays')
            )}
        </Fragment>
    );
};

export default Modal;