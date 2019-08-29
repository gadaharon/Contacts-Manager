import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johns",
        email: "jill@gmail.com",
        phone: "054-679-9405",
        type: "personal"
      },
      {
        id: 2,
        name: "Mark Twain",
        email: "mark@gmail.com",
        phone: "054-679-9406",
        type: "personal"
      },
      {
        id: 1,
        name: "J.Jonah Jameson",
        email: "jj@gmail.com",
        phone: "054-679-9407",
        type: "professional"
      }
    ]
  };
};
