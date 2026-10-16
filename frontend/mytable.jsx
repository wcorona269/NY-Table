import React from "react";
import ReactDOM from 'react-dom/client';
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {};

    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        delete window.currentUser;
    }

    const store = configureStore(preloadedState);

    if (process.env.NODE_ENV !== 'production') {
        window.store = store;
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Root store={store} />);
});
