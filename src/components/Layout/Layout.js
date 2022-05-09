import { Fragment, useContext } from 'react';

import Header from './Header/Header/Header';
import Footer from './Footer/Footer';
import Cart from '../Cart/Cart/Cart';
import PortalContext from '../../contexts/portal-context/portal-context';

const Layout = props => {
    const portalCtx = useContext(PortalContext);

    return (
        <Fragment>
            {portalCtx.cartIsShown && <Cart />}
            <Header onShowCart={props.onShowCart} />
            <main>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    );
};

export default Layout;