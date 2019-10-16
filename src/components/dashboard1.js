import React, { Component } from 'react';
import Header from './header';
class Dashboard1 extends Component {
  render() {
    console.log("hhhhhhhhhhh", this.props)
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-3 ">

              <div class="sidenav">
                <a href="#about"><span><img src={require('../assets/splitwise.png')} alt="split" className="dashBoard1Split" /></span>das</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
              </div>
              </div>
            <div className="col-sm-6 bg-warning">
              <p>Sed ut perspiciatis...</p>
            </div>
            <div className="col-sm-3 ">
              <p>Lorem ipsum2...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard1;