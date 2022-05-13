import { useState } from "react";

import AuthContext from "./AuthProvider";

const AuthProvider = props => {
    const initialToken = localStorage.getItem('token');
    const initialPassword = localStorage.getItem('password');
    
    const [token, setToken] = useState(initialToken);
    const [password, setPassword] = useState(initialPassword);

    const isLoggedIn = Boolean(token);

    const loginHandler = (token, password) => {
        setToken(token);
        setPassword(password);
        localStorage.setItem('token', token);
        localStorage.setItem('password', password);
    };

    const logoutHandler = () => {
        setToken('');
        localStorage.removeItem('token');
        localStorage.removeItem('password');
    };

    const authContext = {
        token,
        password,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };
    console.log(password);
    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;