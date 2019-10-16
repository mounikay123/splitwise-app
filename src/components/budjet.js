import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Budjet extends Component {
    state = {
        sal: 10000,
        rent: 0,
        powerbill: 0,
        busCharges: 0,
        vegetables: 0,
        Groceries: 0,
        balance: 0
    }
    handleChange = e => this.setState({
        [e.target.name]: parseInt(e.target.value)
    });
    submit = (event) => {
        event.preventDefault()
        let b = [];
        const val = this.state
        b.push(val.rent, val.powerbill, val.busCharges, val.vegetables && val.Groceries)
        const sum = b.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
         });
        this.setState({ balance: ((val.sal) - sum )} )
 }
    render() {
        const { sal, rent, powerbill, busCharges, vegetables, Groceries } = this.state
        return (
            <div>
                <h1>Simple Budjet</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8">
                            <form >
                                <div className="form-group">
                                    <label>Salary</label>
                                    <input readOnly='readOnly'
                                        className="input-sm form-control"
                                        name='sal'
                                        type="number"
                                        onChange={this.handleChange}
                                        value={sal}/>
                                    <label>Rent</label>
                                    <input className="input-sm form-control " type="number"
                                        name='rent' onChange={this.handleChange}
                                        value={rent}
                                    />
                                    <label>powerbill</label>
                                    <input className="input-sm form-control" type="number"
                                        name='powerbill'
                                        onChange={this.handleChange}
                                        value={powerbill}
                                    />
                                    <label>bus Charges</label>
                                    <input className="input-sm form-control" type="number"
                                        name='busCharges'
                                        onChange={this.handleChange}
                                        value={busCharges}
                                    />
                                    <label>vegetables</label>
                                    <input className="input-sm form-control" type="number"
                                        name='vegetables'
                                        value={vegetables}
                                        onChange={this.handleChange}
                                    />
                                    <label>Groceries</label>
                                    <input className="input-sm form-control" type="number"
                                        name='Groceries'
                                        value={Groceries}

                            onChange={this.handleChange}
                                    />
                                </div>
                                <button className="btn btn-xs btn-primary" onClick={this.submit}>Submit</button>&nbsp;&nbsp;
                                <button className="btn btn-xs btn-primary"><Link to="/budjet-2">BudjetAdd</Link></button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
export default Budjet;