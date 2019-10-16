import React, { Component } from 'react'
import logo from '../assets/m11.png';
import logo1 from '../assets/names.json';
import { Link } from "react-router-dom";
class Task extends Component {
  state = {
    data: [],
    currentPage: 1,
    numPerPage: 3,
  }
  componentDidMount() {
    this.setState({ data: logo1 })
  }
  handleChange = (e) => {
    this.setState({ currentPage: e.target.id })
  }
  render() {
    const { data, currentPage, numPerPage } = this.state;
    const end = currentPage * numPerPage;
    const begin = end - numPerPage;
    const pageData2 = data.slice(begin, end);
    const pageNumber = [];
    for (var i = 1 ; i <= Math.ceil(data.length / numPerPage); i++) {
      pageNumber.push(i)
    }
    const Pagination = () => (
      pageNumber.map((v, k) => (
        <ul >
          <li key={k} id={v} onClick={this.handleChange}>{v}</li>
        </ul>
      )

      )
    )
    return (
      <div>
        <div>
          <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light py-3 main-nav pad-nav">
              <div class="container">
                <a class="navbar-brand" href="index.html"><img src={logo} className="img-sty" alt="Logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <a class="nav-link text-uppercase nav-color" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-uppercase nav-color" href="#story">about</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-uppercase nav-color" href="#expertise">expertise</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-uppercase nav-color" href="#team">teams</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-uppercase nav-color" href="#works">works</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-uppercase nav-color" href="#people-say">pepole say</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  text-uppercase nav-color" href="#contact">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                {pageData2.map((val, k) => (
                  <ul key={k}>
                    <li><Link to={val.url} >{val.url}</Link></li>
                  </ul>
                ))}
                <Pagination />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Task;
