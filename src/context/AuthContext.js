import { createContext, useEffect, useReducer } from "react";
import AuthReducer from './AuthReducer';
import { token_key } from "../services/constants";

const INITIAL_STATE = {
    token: sessionStorage.getItem(token_key) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        const expirationTime = new Date().getTime() + (60 * 60 * 1000); // 1 heure
        sessionStorage.setItem(token_key, state.token)
        //sessionStorage.setItem(token_key + "_expiration", expirationTime.toString());
    }, [state.token])

    /* useEffect(() => {
        const tokenExpirationTime = sessionStorage.getItem(token_key + "_expiration");
        const currentTime = new Date().getTime();

        if (tokenExpirationTime && currentTime > parseInt(tokenExpirationTime, 10)) {
            dispatch({ type: "LOGOUT" });
        }
    }, [state.token, dispatch]); */


    return (
        <AuthContext.Provider value={{ token: state.token, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

