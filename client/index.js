import React, { Component } from "react";
import ReactDOM from "react-dom";
import ContactList from "./ContactList";
import axios from "axios";
console.log(axios)
//import singleContact from "./singleContact";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      //selectedContact: {}
    };
    //this.selectContact = this.selectContact.bind(this);
  }

  async componentDidMount() {
    const {data} = await axios.post('http://localhost:3000', {
      "query": "query {allStudents {id name school course}}"
    })
    //  JSON.stringify({params: `query {
    //   allStudents {
    //     id
    //   }
    // }`})
    console.log('RES DATA: ', data)
    this.setState({ contacts: data.data.allStudents });
  }
  // async selectContact(contactId) {
  //   const response = await axios.get(`/api/contacts/${contactId}`);
  //   this.setState({ selectedContact: response.data });
  // }

  render() {
    console.log(this.selectContact);
    return (
      <div id="main">
        <div id="navbar">
          <div>Student List</div>
        </div>
        <div id="container">
          <ContactList
            contactList={this.state.contacts}
            //selectContact={this.selectContact}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
