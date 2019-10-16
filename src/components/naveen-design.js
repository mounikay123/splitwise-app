import React, { Component } from 'react';
import { FaFacebookF,FaViber } from "react-icons/fa";
class TableDesign extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className=" col-md-offset-2 col-md-10" >
                           
                            <div className="card car-bord">
                                <div className="card-header card-pad"> 
                                <h6 className="perform-surveillence float-left"  >OTT Performance Surveillence</h6>
                                <img src={require('../assets/clockwise.png')} className="img-wid float-left" />
                                <ul className="nav  float-right">
  <li className="active tab-hov"><a className="aFont">Instant Messaging</a></li>&nbsp;&nbsp;
  <li  className=" tab-hov"><a className="aFont">Social Network</a></li>&nbsp;&nbsp;
  <li  className=" tab-hov"><a className="aFont">Software</a></li>&nbsp;&nbsp;
  <li  className=" tab-hov"><a className="aFont">Web</a></li>&nbsp;&nbsp;
  <li  className=" tab-hov"><a className="aFont">Streaming</a></li>
</ul>
                                </div>
                                <div className="card-body">
                                <img src={require('../assets/clockwise.png')} className="img-wid float-left" />
                                <img src={require('../assets/whatsup image.png')} className="img-wid float-left" />
                                <img src={require('../assets/splitwise.png')} className="img-wid float-left" />
                                
                                </div>
                                <div className="card-footer">Footer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TableDesign;