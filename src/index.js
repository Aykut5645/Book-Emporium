import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';

import './index.css';
import App from './App';

import CartProvider from './contexts/cart-context/CartProvider';
import PortalProvider from './contexts/portal-context/PortalProvider';
import AuthProvider from './contexts/auth-context/auth-context';

ReactDOM.render(
    <Router>
        <PortalProvider>
            <AuthProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </AuthProvider>
        </PortalProvider>
    </Router>,
    document.getElementById('root')
);