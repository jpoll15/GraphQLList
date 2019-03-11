import React, { Component } from "react";
import SchoolList from "./SchoolList";
import axios from "axios";

export default class Schools extends Component {
  constructor() {
    super();
    this.state = {
      schools: [],
      page: 0,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const {data: schoolData} = await axios.get('http://localhost:3000', {
      params: {
        query: `query {
          allSchools(page: 0, perPage: 3) {
            id
            name
            type
            location: state
          }
        }`
      }
    })
    const {data: count} = await axios.get('http://localhost:3000', {
      params: {
        query: `query {
          allSchools {
            id
          }
        }`
      }
    })
    await this.setState({ schools: schoolData.data.allSchools, count: count.data.allSchools.length });
  }

  async handleClick(event) {
    await this.setState({page: this.state.page + (event.target.name === 'next' ? 1 : -1)})
    const {data: schoolData} = await axios.get('http://localhost:3000', {
      params: {
        query: `query {
          allSchools(page: ${this.state.page}, perPage: 3) {
            id
            name
            type
            location: state
          }
        }`
      }
    })
    await this.setState({schools: schoolData.data.allSchools})
  }

  render() {
    return (
      <div>
        <div>Schools</div>
        <SchoolList schoolList={this.state.schools} />
        <div>
        {this.state.page > 0 && (
            <button display="block" type="button" name="prev" onClick={this.handleClick}>
              Prev
            </button>
          )}
        {this.state.page < (Math.ceil(this.state.count / 3) - 1) && (
            <button display="block" type="button" name="next" onClick={this.handleClick}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}
