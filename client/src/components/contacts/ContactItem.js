import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from '../../context/contacts/ContactContext';
import { firstCharUpperCase } from "../../utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;
  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
  }

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
      <ul className="list">
        {email && (
          <li>
            <FontAwesomeIcon icon="envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <FontAwesomeIcon icon="phone" /> {phone}
          </li>
        )}
        <p>
          <button className="btn btn-dark btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </p>
      </ul>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
