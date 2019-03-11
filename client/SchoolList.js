import React from "react";
import SchoolRow from "./SchoolRow";
function SchoolList(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Location</th>
        </tr>

        {props.schoolList.map(school => {
          return (
            <SchoolRow
              key={school.id}
              id={school.id}
              name={school.name}
              type={school.type}
              location={school.location}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default SchoolList;
