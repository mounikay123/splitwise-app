import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// const splitWiseApp  ='./src/assets/splitwise.png'
// import splitWiseApp from '../assets/splitwise.png';
class HomeBudjet extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid con-pad">
                    <nav className="navbar nav-bag">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <img src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/wordmark-7834e15cc74dbbfb529a4e56caaabe4f476d9334f21a34f6e7a24edbb8f30d88.png" className=" img-fluid" alt="splitw " />
                            </div>
                            <ul className="nav  navbar-right">
                                <button type="button" className="btn btn-primary  btn-xs "> LOGIN</button>&nbsp;&nbsp;
                                <p className="pfont">Or</p>&nbsp;&nbsp;
                                <button type="button" className="btn btn-success btn-xs  "><Link to="/SignUp"> SIGN UP</Link>
                                </button>
                            </ul>
                        </div>
                    </nav>
                    <div className="row">
                    <div className="container  pad-lef">
                    <div className="row">
                    <img src={require('../assets/splitwise.png')} alt="split" className="image-fluid" />
                    <h1 className="display-3 font-weight-bold">Split expenses with friends.</h1>
                    </div>
                    <div className="row">
                    <h5><strong>Share</strong> bills and IOUs. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web, iPhone, and Android.</h5>
                    </div>
                    <div className="row">
                    <div className="text-center">
                    <img src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/homepage/dashboard-e383c7314a2035b8d43b18ab3898f18c37ddf2d082a2a8c88d364b9d4b6e6b4a.png"   className="img-fluid2"/>
                    <img src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/homepage/iphone-5ce28eeed41bdf0e9d52be66551c52f1f7b982835f722dc48a07afc8a644a848.png"   className="img-fluid3"/>
                    </div>
                  
                   
                    </div>
                   
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default HomeBudjet;
