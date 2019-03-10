import React from "react";

function singleContact(prop) {
  return (
    <div id="single-contact">
      <img src={prop.imageUrl} />
      <div id="contact-info">
        <p>Name: {prop.name}</p>
        <p>Email: {prop.email}</p>
        <p>Phone: {prop.phone}</p>
      </div>
    </div>
  );
}

export default singleContact;
