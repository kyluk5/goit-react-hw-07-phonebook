import axios from "axios";
import {
  addContactsReguest,
  addContactsSeccess,
  addContactsError,
  getContactsReguest,
  getContactsSeccess,
  getContactsError,
  deleteContactsReguest,
  deleteContactsSeccess,
  deleteContactsError,
} from "../actions/contactsAction";

export const addContact = (name, number) => (dispatch) => {
  dispatch(addContactsReguest());
  axios
    .post("http://localhost:5000/contacts", { name, number })
    .then((response) => {
      dispatch(addContactsSeccess(response.data));
    })
    .catch((error) => dispatch(addContactsError(error)));
};

export const getContact = () => (dispatch) => {
  dispatch(getContactsReguest());
  axios
    .get("http://localhost:5000/contacts")
    .then((response) => {
      console.log(response);
      dispatch(getContactsSeccess(response.data));
    })
    .catch((error) => dispatch(getContactsError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactsReguest());
  axios
    .delete(`http://localhost:5000/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactsSeccess(id));
    })
    .catch((error) => dispatch(deleteContactsError(error)));
};
