// import React ,{Component} from 'react';
// class Notifications extends Component{
//     render(){
//         return(
//             <div> 
//                 <h1>
//                     Notifications
//                 </h1>
//                 <div className="container">
//                 <div className="row">
//                 <div ckass="col-md-12">
                
//                 </div>
//                 </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Notifications;
import React, { Component } from 'react';


import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class Notifications extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default Notifications;