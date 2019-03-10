import React, { Component } from "react";
import ReactDOM from "react-dom";
import ContactList from "./ContactList";
import axios from "axios";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      page: 0,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const {data: studentData} = await axios.get('http://localhost:3000', {
      params: {
        query: `query {
          allStudents(page: 0, perPage: 3) {
            id
            name
            school
            course: class
          }
        }`
      }
    })
    const {data: count} = await axios.get('http://localhost:3000', {
      params: {
        query: `query {
          allStudents {
            id
          }
        }`
      }
    })
    await this.setState({ contacts: studentData.data.allStudents, count: count.data.allStudents.length });
  }

  async handleClick(event) {
    await this.setState({page: this.state.page + (event.target.name === 'next' ? 1 : -1)})
    console.log(this.state.page)
    const {data: studentData} = await axios.get('http://localhost:3000', {
      params: {
        query: `query {
          allStudents(page: ${this.state.page}, perPage: 3) {
            id
            name
            school
            course: class
          }
        }`
      }
    })
    await this.setState({contacts: studentData.data.allStudents})
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Student List</div>
        </div>
        <div id="container">
          <ContactList
            contactList={this.state.contacts}
          />
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
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
