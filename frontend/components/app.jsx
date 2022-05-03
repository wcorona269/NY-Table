import React from "react";
import Header from "./nav_bar/header";
import { Link, Route } from "react-router-dom";
import HomeContainer from "./main/home_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import ModalContainer from "./modal/modal_container";

const App = () => (
    <>
        <ModalContainer/>
        <div className="outer-body">
            <Route path='/' component={Header}/>
                <div className="inner-body">
                    <Route path='/' component={NavBarContainer}/>
                    <Route exact path='/' component={HomeContainer}/>
                </div>
        </div>
    </>
)

export default App;
