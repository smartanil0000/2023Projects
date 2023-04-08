import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    // console.log(props)
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img className="ui avatar image" src="" alt="user" />
        </div>
        <div className="content">
          <div className="header">Dipesh</div>
          <div className="description">cs.dipesh@gmail.com</div>
        </div>

        <div className="center-div">
            <Link to="/">
                <button className="ui button blue center">Back to contact list</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
