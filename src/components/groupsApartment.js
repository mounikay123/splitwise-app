
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class GroupApartment extends Component {
    state = {
        addPerson1: "",
        Email1: "",
        counter: 1,
        advanceSetingShow: false,
        autoFocus: true,
        data: [
            { name: 'Arjun', emailid: 'arjun.ip@gmail.com' }
        ],
        groupPersons:[],
        isRedirect: false
    }
    add = () => {
        this.setState((prev) => {
            return prev.data.push({ name: '', id: '0' })
        })
    }
    getInput = () => {
        let self = this;
        console.log("dsadsa")
        return self.state.data.map((val, ind) => {
            console.log(val)
           
            
            return (
                <div className="col-md-12" key={ind}>
                    <img className="rounded-circle image-round2" src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/avatars/50-31b0bb2f5aec77f11d60a1dc3fa14c23a958fed79261b32e94a73e9c27473ebb.png" alt="jbh" />
                    <input key={val.name} autoFocus={this.state.autoFocus} onChange={(event) => self.changeVal(event, ind, 'name')} value={val.name} type='text' className="input-xs " placeholder=" Name" />&nbsp;
                    <input key={val.emailid} type="Email " autoFocus={this.state.autoFocus} value={val.emailid} className="input-xs " placeholder=" Email address (optional)" onChange={(event) => { self.changeVal(event, ind, 'emailid') }} />&nbsp;
                    <a ><i className="fa fa-close" onClick={this.RemovePerson} ></i></a>
                </div>

            )
          
        })

    }
    changeVal = (event, ind, ele) => {
        let _self = this;
        let newData = _self.state.data;
        event.target.focus();
        newData[ind][ele] = event.target.value;
        console.log(newData)
        this.setState({
            data: this.state.data, groupPersons:newData
        })
        console.log(this.state.groupPersons);
    }
    RemovePerson = (index) => {
        this.setState((pre) => ({ data: pre.data.filter(val => val !== index) }))
    }

    advancedSettings = () => {
        this.setState({ advanceSetingShow: true })
    }

    saveGrp = (e) => {
        e.preventDefault();
      
        this.setState({
            isRedirect: true, 
        })

    this.props.history.push('/DashBoard1', this.state.groupPersons)

    }

    render() {
        return (
            <div>
                <div className="container ">

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={require('../assets/splitwise.png')} alt="split" />
                            </div>
                            <div className="col-md-6">
                                <h5>START A NEW GROUP</h5>
                                <div>
                                    <form>
                                        <label className="shall-grp">My group shall be called…</label>
                                        <div className="place">
                                            <input type="text" className="form-control input-lg grp-inp" placeholder="FunkyTown" />
                                            {/* <input type="submit" className=" btn btn-warning grp-save" value='save' /> */}
                                        </div>

                                        <hr className="hr-mar" />
                                        <div>
                                            <h6>GROUP MEMBERS </h6>
                                            <div className="tips-grp">
                                                <p>Tip: Lots of people to add? Send your friends an invite link.</p></div>
                                            <div className='row'>

                                                {this.getInput()}
                                                <hr />
                                                <a href='#' onClick={this.add} > +Add A Person</a>
                                                {this.state.advanceSetingShow ? null : <a href='#' onClick={this.advancedSettings} > Advanced Settings</a>}

                                                {this.state.advanceSetingShow ? <div ><p>SIMPLIFY GROUP DEBTS?</p>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div> : null}
                                                <button className="btn btn-xs btn-danger" onClick={this.saveGrp}>Save</button>

                                            </div>
                                            {this.state.isRedirect ? <Redirect to={{
                                                path: '/dashboard1',
                                                state: { grpmembers: this.state.data }
                                            }} /> : null}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default GroupApartment;