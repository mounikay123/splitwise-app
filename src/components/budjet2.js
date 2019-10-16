import React, { Component } from 'react';
import AddElements from '../components/budjet3'
class Budjet2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Salary: 10000,
            values: "",
            value2: 0,
            balance: 0,
            showResults: false,
            showResults2: false,
            arr: []
        }
    }

   
    remainingAmount = (event) => {
       
        event.preventDefault()
        this.setState({ showResults: true });
        const sub = this.state.Salary - this.state.value2;
        if(this.state.balance===0){
            this.setState((prevState, props) => ({
            balance:  sub-prevState.balance 
            }), () => { this.state.arr.push(obj) });
        }
        else{
            this.setState({balance:this.state.balance-this.state.value2});
        }
         console.log(this.state.arr, "sid")
        const obj={
            name:this.state.values,
            val:this.state.value2
           
        }
   
        this.clearInputs()
      
    }
    getInitialState = (e) => {
        e.preventDefault()
        this.setState({ showResults: true })

    }
    clearInputs = () => {
        this.setState({ values:"", value2:""})
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: (event.target.value) })
    }
   render() {

        const { values, value2 } = this.state
        return (
            <div>
                <h1>budjet Schedule</h1>
                <form className="form-inline" id="create-course-form">
                    <label htmlFor="email">Salary:</label>
                    <input type="number" readOnly='readOnly' className="form-control" value={this.state.Salary} />
                    <button type="submit" className="btn btn-success" onClick={this.getInitialState} >Add</button>
                </form>
                {this.state.showResults ? <form className="form-inline" >

                    <input type="text" className="form-control" name='values' value={values} onChange={this.handleChange} />
                    <input type="number" className="form-control" name='value2' value={value2} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-success" onClick={this.remainingAmount}>Add</button>
                    <h1>remainingAmount:{this.state.balance}</h1>
                </form> : null}
                <AddElements arra={this.state.arr} />
            </div>
        )
    }
}
export default Budjet2;