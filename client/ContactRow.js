import React from "react";
function ContactRow(props) {
  return (
    <tr>
      <th>{props.name}</th>
      <th>{props.school}</th>
      <th>{props.course}</th>
    </tr>
  );
}

export default ContactRow;
