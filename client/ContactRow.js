import React from "react";
function ContactRow(props) {
  console.log(props);
  return (
    <tr
      // onClick={async function() {
      //   await props.selectContact(props.id);
      // }}
    >
      <th>{props.name}</th>
      <th>{props.school}</th>
      <th>{props.course}</th>
    </tr>
  );
}

export default ContactRow;
