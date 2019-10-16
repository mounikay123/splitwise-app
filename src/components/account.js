import React, { Component } from 'react';
import Select from 'react-select';
import currenciesData from '../components/instance';
import Notifications from '../components/notifications'
// import timezones from 'google-timezones-json';
// console.log("timezones" ,timezones);
// const timeArray = []
// for (let key in timezones) {
//     const timeZoneData = {
//         label: key,
//         value: timezones[key]
//     }
//     timeArray.push(timeZoneData)
// }
const languages = [
    { value: 'english', label: 'english' },
    { value: 'telugu', label: 'Telugu' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'marati', label: 'marati' },
    { value: 'tamil', label: 'tamil' },
    { value: 'kannada', label: 'kannada' },
    { value: 'french', label: 'french' },
    { value: 'spanish', label: 'spanish' },
    { value: 'russian', label: 'russian' },
    { value: 'bengali', label: 'Bengali' },
    { value: 'punjabi', label: 'punjabi' },
    { value: 'Malayalam', label: 'Malayalam' },
    { value: 'Gujarathi', label: 'Gujarathi' },
    { value: 'oodia', label: 'oodia' },
    { value: 'Urdu', label: 'Urdu' },

];
class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inp: false,
            inp1: false,
            inp2: false,
            inp3: false,
            data: [],
            currency: [],
            username: this.props.location.state.user.user,
            email:this.props.location.state.user.email,
            phoneNumber:this.props.location.state.user.phoneNumber,
            password:this.props.location.state.user.password, 
            selectedOption: null,
            selectedFile: null

        }
    }


    edit = () => {

        this.setState({ inp: true })
    }
    edit1 = () => {

        this.setState({ inp1: true })
    }
    edit2 = () => {

        this.setState({ inp2: true })
    }
    edit3 = () => {

        this.setState({ inp3: true })
    }
    // componentDidMount() {
    //     this.getCurrenciesData()
    // }

    // getCurrenciesData = (e) => {
    //     let currencies = [];
    //     currenciesData.get('v1/lookup/currencies?limit=100').then(res => {
    //         res.data.map(val => {
    //             currencies.push({ value: val.country, label: val.code })
    //             this.setState({ currency: currencies })
    //         })
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
    fileChangeHandler = (event) => {
        this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) })

    }
    inpChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }
    save=()=>{

    }
    render() {
        return (
            <div>
                <h1>Account Details</h1>
                <div className="row">
                    <div className="container con-pad">
                        <h3>Your Account</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="col-md-6">
                                            <input type="file" onChange={this.fileChangeHandler} />
                                            <img src={this.state.selectedFile} />
                                            <button type="button" className="btn btn-default btn-xs " onClick={this.fileUploadHandler} />
                                        </div>
                                        <div className="col-md-6">
                                            <form>
                                                <label>Your Name</label>
                                                <div>
                                                    {this.state.inp ? null : <strong>{this.props.location.state.user.user}</strong>}
                                                    {this.state.inp ? <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.inpChange} /> : null}
                                                    <a onClick={this.edit}><i className="fa fa-pencil"></i>Edit</a>
                                                </div>
                                                <label>Email</label>
                                                <div>
                                                    {this.state.inp1 ? null : <strong>{this.props.location.state.user.email}</strong>}
                                                    <a onClick={this.edit1}><i className="fa fa-pencil"></i>Edit</a>
                                                    {this.state.inp1 ? <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.inpChange} /> : null}
                                                </div>
                                                <label>Your Phone Number</label>
                                                <div>
                                                    {this.state.inp2 ? null : <strong>{this.props.location.state.user.phoneNumber}</strong>}
                                                    <a onClick={this.edit2}><i className="fa fa-pencil"></i>Edit</a>
                                                    {this.state.inp2 ? <input type="text" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.inpChange} /> : null}
                                                </div>
                                                <label>Your Password</label>
                                                <div>
                                                    {this.state.inp3 ? null : <strong>{this.props.location.state.user.password}</strong>}
                                                    <a onClick={this.edit3}><i className="fa fa-pencil"></i>Edit</a>
                                                    {this.state.inp3 ? <input type="text" className="form-control"  name="password" value={this.state.password} onChange={this.inpChange} /> : null}
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="col-md-6">
                                        </div>
                                        <form>
                                            <label>Your Default currency</label>
                                            <label>(for new expenses)</label>
                                            <div>
                                                <Select
                                                    onChange={(selectedOption2) => {
                                                        this.state.currency.filter((val) => {
                                                            if (selectedOption2 === val) {
                                                                this.setState({ selectedOption: selectedOption2 });
                                                            }
                                                        }
                                                        )
                                                    }
                                                    }
                                                    value={this.state.selectedOption}
                                                    options={this.state.currency}
                                                />
                                            </div>
                                            {/* <label>Your Time Zone</label>
                                            <Select

                                                options={timeArray}
                                            /> */}
                                            <label>Your language</label>

                                            <div>
                                                <Select

                                                    options={languages}
                                                />
                                            </div>
                                            <button type="button" className="btn btn-xs btn-default create-btn"><img src="" /> Coonect your google account</button>
                                            <button type="button" className="btn btn-xs btn-default create-btn"><img src="" /> Coonect your facebook account</button>
                                        </form>
                                    </div>
                                   
                                </div>
                                <button type="button" className="btn btn-xs btn-warning" onClick={this.save}>Save</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Notifications />
            </div>
        )
    }
}
export default Account;