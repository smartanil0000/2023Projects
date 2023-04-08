import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  console.log(props)
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
        
      </div>
    </div>
  );
};

export default ContactCard;
