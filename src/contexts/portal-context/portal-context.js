import { createContext } from 'react';

const PortalContext = createContext({
    cartIsShown: false,
    showCart: () => { },
    hideCart: () => { }
});

export default PortalContext;