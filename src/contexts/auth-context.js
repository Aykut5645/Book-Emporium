import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: token => { },
    logout: () => { }
});

export const AuthContextProvider = props => {
    const [token, setToken] = useState('');

    const isLoggedIn = Boolean(token);

    const loginHandler = token => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken('');
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