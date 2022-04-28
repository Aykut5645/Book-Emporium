import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';

import './index.css';
import App from './App';

import CartProvider from './contexts/cart-context/CartProvider';
import { AuthContextProvider } from './contexts/auth-context';
import PortalProvider from './contexts/portal-context/PortalProvider';

ReactDOM.render(
    <Router>
        <PortalProvider>
            <AuthContextProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </AuthContextProvider>
        </PortalProvider>
    </Router>,
    document.getElementById('root')
);