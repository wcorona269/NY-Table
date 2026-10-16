import React from "react";
import Header from "./nav_bar/header";
import { Link, Route } from "react-router-dom";
import { ProtectedRoute } from '../util/protected_route_util';
import Home from "./main/home";
import NavBar from "./nav_bar/nav_bar";
import Modal from "./modal/modal";
import Footer from './footer/footer';
import RestShow from "./restaurant/rest_show";
import UserShow from './user/show';
import BookingForm from "./form/booking_form";
import BookingShow from './booking/show';
import UpdateBooking from './booking/update';
import SearchResultsContainer from './search/results';
import RestIndexContainer from './restaurant/index';
import ReviewForm from './reviews/create';
import { Switch } from "react-router-dom";

const App = () => (
    <>
        <Modal/>
        <div className="outer-body">
            <Route path='/' component={Header}/>
                <div className="inner-body">
                    <Route path='/' component={NavBar}/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path={"/restaurants/all"} component={RestIndexContainer} />
                        <Route exact path={"/restaurants/:restId"} component={RestShow} />
                        <Route path={`/search/:input/:time/:party/:date`} component={SearchResultsContainer} />
                        <ProtectedRoute path="/my/profile" component={UserShow} />
                        <ProtectedRoute path='/booking/:bookingId/modify' component={UpdateBooking}/>
                        <ProtectedRoute path='/booking/show/:bookingId/:time/:date' component={BookingShow}/>
                        <ProtectedRoute path="/booking/:restId/:date/:resTime/:party" component={BookingForm} />
                        <ProtectedRoute path="/review/create/:restId" component={ReviewForm} />
                    </Switch>
                </div>
            <Route path='/' component={Footer}/>
        </div>
    </>
)

export default App;
