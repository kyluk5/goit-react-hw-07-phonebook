import axios from "axios";
import {
  addContactsReguest,
  addContactsSeccess,
  addContactsError,
} from "../actions/contactsAction";

export const addContact = (name, number) => (dispatch) => {
  dispatch(addContactsReguest());
  axios
    .post("http://localhost:5000/contacts", { name, number })
    .then((response) => {
      console.log(response);
      dispatch(addContactsSeccess());
    })
    .catch((error) => dispatch(addContactsError(error)));
};
