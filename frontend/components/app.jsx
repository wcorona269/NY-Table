import React from "react";
import SignupContainer from "./form/signup_form_container";
import { Link, Route } from "react-router-dom";
import Modal from "./modal/modal_container";

const App = () => (
    <div>
        <Modal/>
        {/* <h1>it's working</h1> */}
        {/* <Route path="/" component={SignupContainer}/> */}
        {/* <SignupContainer/> */}
    </div>
)

export default App;


