import React from "react";
function SchoolRow(props) {
  return (
    <tr>
      <th>{props.name}</th>
      <th>{props.type}</th>
      <th>{props.location}</th>
    </tr>
  );
}

export default SchoolRow;
