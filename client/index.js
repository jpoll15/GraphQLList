import React from "react";
import ReactDOM from "react-dom";
import Contacts from "./Contacts";
import Schools from "./Schools";

const Main = () => {
  return (
    <div id="main">
      <div id="navbar">
        <div>A Very Simple GraphQL Demo</div>
      </div>
      <div>
        <Contacts className="container" />
        <Schools className="container" />
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
