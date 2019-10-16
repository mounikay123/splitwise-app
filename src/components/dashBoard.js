import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Header from './header';
class Dashboard extends Component {

    state = {
        user1: "",
        email1: "",
        password1: "",
        phoneNumber1: "",
        isRedirect: false
    }
    reDirectdata = (e) => {
        e.preventDefault();
        this.setState({
            isRedirect: true
        })
        return 

    }
    render() {
        console.log(this.props);

        return (
            <div>
               <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className=" split-person" src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/drawings/person-orange-132756aba0816bfed6540e25d57d59f6900f36b6854ef71b361ac24d7db53d39.png" alt="jbh" />
                        </div>
                        <div className="col-md-6">
                        <h1> <img src={require('../assets/splitwise.png')} alt="split" className="dashboard-spli" />
                        Welcome to Splitwise!</h1>
                        <div><p>What would you like to do first?</p></div>
                        <div><a className="btn btn-large btn-warning apart-btn"><i className=" fa fa-home"><Link to='/Apartment-group'>Add Your Apartment</Link></i></a></div>
                        <div><a className="btn btn-large btn-warning apart-btn"><i className=" fa fa-globe">Add  group Trip</i></a></div>
                        <div><a className="btn btn-large btn-light apart-btn">
                        Skip setup for now</a></div>

                        </div>

                    </div>

                </div>
                {this.state.isRedirect ? <Redirect to={{
                    pathname: '/Account',
                    state: { user: this.props.location.state }
                }} /> : null}

            </div>
        )
    }
}
export default Dashboard;
