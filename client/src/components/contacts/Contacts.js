import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contacts/ContactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {filtered
        ? filtered.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        : contacts.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
    </Fragment>
  );
};

export default Contacts;
