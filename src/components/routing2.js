import React, { Component } from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Task from './naveenReactTask';
import Facebook from './facebook';
import Twitter from './twitter';
import Google from './google';
import Splitwise from './splitwise';
import Gmail from './gmail';
import Goibibo from './goibibo';
import Messanger from './messenger';
import Skype from './Skype';
import Zomato from './zomato';
import Viu from './viu';
class Routing2 extends Component {
    render() {
        return (
            <div>
               <BrowserRouter >
               <Switch >
               <Route exact={true} path='/' component={Task}></Route>
                   <Route  path='/facebook' component={Facebook}></Route>
                   <Route  path='/twitter' component={Twitter}></Route>
                   <Route  path='/google' component={Google}></Route>
                   <Route  path='/splitwise' component={Splitwise}></Route>
                   <Route  path='/gmail' component={Gmail}></Route>
                   <Route  path='/goibibo' component={Goibibo}></Route>
                   <Route  path='/messanger' component={Messanger}></Route>
                   <Route  path='/skype' component={Skype}></Route>
                   <Route  path='/Zomato' component={Zomato}></Route>
                   <Route  path='/viu' component={Viu}></Route>
               </Switch>
               </BrowserRouter> 
            </div>
        )
    }
}
export default Routing2;
