import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store"
import {signup} from "./actions/user_actions"
import {login, logout} from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});

