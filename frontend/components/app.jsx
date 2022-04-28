import React from "react";
import SignupContainer from "./form/signup_container";
import { Link, Route } from "react-router-dom";

const App = () => (
    <div>
        <h1>it's working</h1>
        {/* <Route path="/" component={SignupContainer}/> */}
        <SignupContainer/>
    </div>
)

export default App;

