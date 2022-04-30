import React from "react";
import SignupContainer from "./form/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Link, Route } from "react-router-dom";
import Modal from "./modal/modal";
import ModalContainer from "./modal/modal_container";

const App = () => (
    
    <div>
        <NavBarContainer/>
        <ModalContainer className="modal-container"/>
        {/* <h1>it's working</h1> */}
        {/* <Route path="/" component={SignupContainer}/> */}
        {/* <SignupContainer/> */}
    </div>
)

export default App;



