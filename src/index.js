import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';

import './index.css';
import App from './App';
import CartProvider from './contexts/cart-context/CartProvider';
import { AuthContextProvider } from './contexts/auth-context';
import { auth } from './firebase-config';

console.log(auth);

ReactDOM.render(
    <Router>
        <AuthContextProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AuthContextProvider>
    </Router>,
    document.getElementById('root')
);