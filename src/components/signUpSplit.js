import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TableDesign from './naveen-design';

class SignUp extends Component {
    state = {
        userName: "",
        emailId: "",
        password: "",
        phoneNumber:"",
        errors: [],
        reDirect: false

    }
    formFilled = e => this.setState({
        [e.target.name]: (e.target.value)

    });
    isFormValid = () => {
        let error;
        let errors = [];
        if (this.isFormEmpty(this.state)) {
            error = { message: "Fill all the details" }
            this.setState({ errors: errors.concat(error) });
            console.log(this.state.errors, "errors")
            return false

        }
        else if (this.isPassword(this.state)) {
            error = { message: "password should be atleast 6 letters" }
            this.setState({ errors: errors.concat(error) });
            return false
        }
        else {
            return true;
        }
    }
    isFormEmpty = ({ userName, emailId, password ,phoneNumber}) => {
        console.log("form", this.state.userName, this.state.password, this.state.emailId,this.state.phoneNumber)

        return !userName.length || !emailId.length || !password.length || !phoneNumber.length;
    }
    isPassword = (password) => {
        if (!password.length > 6) {
            return false;
        }
        else {
            this.setState({ reDirect: true })

        }
    }
    // signUpSubmit = (event) => {
    //     event.preventDefault()
    //     if (this.isFormValid()) {
    //         console.log("mouni")
    //         this.setState({ reDirect: true })
    //     }
    // }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="container  pad-lef2">
                        <div className="row">
                            <div className="colmd-6">
                                <img src={require('../assets/splitwise.png')} alt="split" className="image-fluid2" />
                            </div>
                            <div className="col-md-4">
                                <h3 className="signUpSplitHe">INTRODUCE YOURSELF</h3>
                                <form>
                                    <div className="form-group">
                                        <h3 className="display-0">Hi there! My name is</h3>
                                        <input type="text " className="form-control myNameInp" name="userName" value={this.state.userName} onChange={this.formFilled}></input>
                                        <h3 className="display-0">Here’s my email address: </h3>
                                        <input type="email " className="form-control myNameInp" name="emailId" value={this.state.emailId} onChange={this.formFilled}></input>
                                        <h3 className="display-0">Here’s my phone number: </h3>
                                        <input type="number " className="form-control myNameInp" name="phoneNumber" value={this.state.phoneNumber} onChange={this.formFilled}></input>
                                        
                                        <h3 className="display-0">And here’s my password: </h3>
                                        <input type="password " className="form-control myNameInp" name="password" value={this.state.password} onChange={this.formFilled}></input>
                                        <div className="row ro-top" >
                                            <div className="col-md-6  ">
                                                <input type="submit" className="input-lg signMe form-control " value="Sign Me Up!" onClick={this.isFormValid} />
                                            </div>
                                            <div className="col-md-6  ">
                                                <button className="google-contacts" >
                                                    or&nbsp;&nbsp;
                                    <a className="btn btn-large btn-signup btn-google" >
                                                        <img src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png" alt="Google 2017" />
                                                        Sign up with Google
                                    </a>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                                {this.state.reDirect ? <Redirect to={{
                                    pathname: '/Dashboard',
                                    state: { user: this.state.userName, email:this.state.emailId ,password:this.state.password, phoneNumber:this.state.phoneNumber}
                                }} /> : null}
                              
                            </div> 
                        </div>
                    </div>

                </div>
                <TableDesign />
            </div>





        )
    }
}
export default SignUp;