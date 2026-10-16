import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { ProtectedRoute } from '../util/protected_route_util';
import { fetchRests } from "../actions/rest_actions";
import NavBar from "./nav_bar/nav_bar";
import Footer from './footer/footer';
import Modal from "./modal/modal";
import Home from "./main/home";
import SearchResults from './search/results';
import RestShow from "./restaurant/rest_show";
import BookingForm from "./form/booking_form";
import BookingShow from './booking/show';
import UpdateBooking from './booking/update';
import ReviewForm from './reviews/create';
import UserShow from './user/show';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

const App = () => {
    const dispatch = useDispatch();
    const hasRests = useSelector(state => Object.keys(state.entities.rests).length > 1);

    // Restaurant summaries back the home page, search and autocomplete; load once.
    useEffect(() => {
        if (!hasRests) dispatch(fetchRests());
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ScrollToTop />
            <Modal />
            <NavBar />
            <Box component="main" sx={{ flex: 1 }}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/restaurants' component={SearchResults} />
                    <Route exact path='/search' component={SearchResults} />
                    <Route exact path='/restaurants/:restId' component={RestShow} />
                    <ProtectedRoute exact path='/book/:restId' component={BookingForm} />
                    <ProtectedRoute exact path='/reservations/:bookingId' component={BookingShow} />
                    <ProtectedRoute exact path='/reservations/:bookingId/modify' component={UpdateBooking} />
                    <ProtectedRoute exact path='/review/:restId' component={ReviewForm} />
                    <ProtectedRoute path='/profile/:tab?' component={UserShow} />
                    <Redirect to='/' />
                </Switch>
            </Box>
            <Footer />
        </Box>
    );
};

export default App;
