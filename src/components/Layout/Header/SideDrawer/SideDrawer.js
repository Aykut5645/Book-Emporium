import { Fragment } from 'react';

import Backdrop from '../../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const SideDrawer = props => {
    return (
        <Fragment>
            <Backdrop onClick={props.onClose} width={'55%'} />
            <aside className={classes['side-drawer']} onClick={props.onClose}>
                {props.children}
            </aside>
        </Fragment>
    );
};

export default SideDrawer;