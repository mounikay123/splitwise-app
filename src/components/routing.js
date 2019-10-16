import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Budjet from './budjet';
import Budjet2 from './budjet2';
import HomeBudjet from './hoomeBudjet';
import SignUp from './signUpSplit';
import Dashboard from './dashBoard';
import Account from  './account';
import Dashboard1 from './dashboard1';
import GroupApartment from  './groupsApartment';
import Task from '../components/naveenReactTask';


class Routing extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {/* <Route exact path="/" component={Task} /> */}
                        <Route exact path="/" component={Budjet} />

                        <Route path='/budjet-2' component={Budjet2} />
                        <Route path="/signup"  component={SignUp} />
                        <Route path="/DashBoard" component={Dashboard} />
                        <Route path="/DashBoard1" component={Dashboard1} />
                        <Route path="/Account" component={Account} />
                        <Route path="/Apartment-group" component={GroupApartment} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Routing;