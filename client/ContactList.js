import React from "react";
import ContactRow from "./ContactRow";
function ContactList(props) {
  console.log(props);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>School</th>
          <th>Course</th>
        </tr>

        {props.contactList.map(contact => {
          return (
            <ContactRow
              key={contact.id}
              id={contact.id}
              name={contact.name}
              school={contact.school}
              course={contact.course}
              //phone={contact.phone}
              //email={contact.email}
              //selectContact={props.selectContact}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ContactList;
