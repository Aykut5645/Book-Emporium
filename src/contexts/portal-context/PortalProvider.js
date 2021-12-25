import { useState } from 'react';

import PortalContext from './portal-context';

const PortalProvider = props => {
    const [cartIsShown, setCartIsShown] = useState(false);
    
    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    const portalContext = {
        cartIsShow: cartIsShown,
        showCart: showCartHandler,
        hideCart: hideCartHandler
    };

    return (
        <PortalContext.Provider value={portalContext}>
            {props.children}
        </PortalContext.Provider>
    );
};

export default PortalProvider;