import React from "react";
// import createRoot from "react-dom/client";
import ReactDOM from 'react-dom/client'
import Root from "./components/root";
import configureStore from "./store/store"
import {signup} from "./actions/session_actions"
import {login, logout} from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Root store={store} />);
});

