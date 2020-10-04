import React from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from '../NotFound/NotFound';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import CreateAccount from '../CreateAccount/CreateAccount';
import EventTask from '../EventTask/EventTask';
import Login from '../Login/Login';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import Admin from '../Admin/Admin';

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/home">
                    <Home />
                </Route>

                <PrivateRouter path="/account/:id">
                    <CreateAccount />
                </PrivateRouter>

                <PrivateRouter path="/event">
                    <EventTask />
                </PrivateRouter>

                <Route path="/login">
                    <Login />
                </Route>
                
                <Route path="/admin">
                    <Admin />
                </Route>

                <Route path="*">
                    <HomeHeader />
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default Main;