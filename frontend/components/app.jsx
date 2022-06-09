import React from "react";
import Header from "./nav_bar/header";
import { Link, Route } from "react-router-dom";
import { ProtectedRoute } from '../util/protected_route_util';
import HomeContainer from "./main/home_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import ModalContainer from "./modal/modal_container";
import Footer from './footer/footer';
import RestShowContainer from "./restaurant/rest_show_container";
import UserShow from './user/show';
import BookingForm from "./form/booking_form";
import BookingShow from './booking/show';
import UpdateBooking from './booking/update';
import { Switch } from "react-router-dom";

const App = () => (
    <>
        <ModalContainer/>
        <div className="outer-body">
            <Route path='/' component={Header}/>
                <div className="inner-body">
                    <Route path='/' component={NavBarContainer}/>
                    <Switch>
                        <Route exact path='/' component={HomeContainer}/>
                        <Route exact path={"/restaurants/:restId"} component={RestShowContainer} />
                        <ProtectedRoute path="/my/profile" component={UserShow} />
                        <ProtectedRoute path='/booking/:bookingId/modify' component={UpdateBooking}/>
                        <ProtectedRoute path='/booking/show/:bookingId' component={BookingShow}/>
                        <ProtectedRoute path="/booking" component={BookingForm} />
                    </Switch>
                </div>
            <Route path='/' component={Footer}/>
        </div>
    </>
)

export default App;
