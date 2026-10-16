import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import App from "./app";

const Root = ({ store }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </Provider>
);

export default Root;
