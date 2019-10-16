import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar nav-bag con-pad">
                    <div className="container-fluid ">
                        <div className="navbar-header">
                            <img src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/wordmark-7834e15cc74dbbfb529a4e56caaabe4f476d9334f21a34f6e7a24edbb8f30d88.png" className=" img-fluid" alt="splitw " />
                        </div>
                        <ul className="nav navbar-right">
                            <div className="dropdown">
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    <img className="rounded-circle image-round" src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/avatars/50-31b0bb2f5aec77f11d60a1dc3fa14c23a958fed79261b32e94a73e9c27473ebb.png" alt="jbh" />
                                    mounika
                                   </button>
                                <div className="dropdown-menu dropDown-ele">
                                    <a className="dropdown-item" onClick={this.reDirectdata}>Account Details</a>

                                    <a className="dropdown-item" href="#">Create a Group</a>
                                    <a className="dropdown-item" href="#">Fairness calculators</a>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;