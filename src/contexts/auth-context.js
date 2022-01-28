import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: token => { },
    logout: () => { }
});

export const AuthContextProvider = props => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const isLoggedIn = Boolean(token);

    const loginHandler = token => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logoutHandler = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    const authContext = {
        token,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );
};