import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
//   console.log(props);
  const removeContactHandler = (id) => {
    props.getContactId(id);
  };

//   const contacts = [
//     {
//       id: 1,
//       name: "dipesh",
//       email: "dipesh@gmail.com",
//     },
//   ];
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={removeContactHandler}
        key={contact.id}
      />
    );
  });
  return ( 
    <div className="main">
        <h2>Contact List
            <Link to="/add">
            <button className="ui button blue center">Add Contact</button>
            </Link>
        </h2>

        <div className="ui celled list"> {renderContactList} </div>
    </div>
  )
};


export default ContactList;
