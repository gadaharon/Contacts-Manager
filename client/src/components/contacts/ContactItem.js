import React from "react";
import { firstCharUpperCase } from '../../utils/Utils';
import './style.css';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          className={ 
            "contact-type badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {firstCharUpperCase(type)}
        </span>
      </h3>
    </div>
  );
};

export default ContactItem;
