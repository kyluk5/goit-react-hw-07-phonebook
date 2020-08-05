import { VALUE } from "../constants/contactsConst";
import { createAction } from "@reduxjs/toolkit";

export const getContactsReguest = createAction("@contacts/getReguest");
export const getContactsSeccess = createAction("@contacts/getReguestSeccess");
export const getContactsError = createAction("@contacts/getReguestError");
// ==================================================================
export const addContactsReguest = createAction("@contacts/addReguest");
export const addContactsSeccess = createAction("@contacts/addReguestSeccess");
export const addContactsError = createAction("@contacts/addReguestError");
// ==================================================================
export const deleteContactsReguest = createAction("@contacts/deleteReguest");
export const deleteContactsSeccess = createAction(
  "@contacts/deleteReguestSeccess"
);
export const deleteContactsError = createAction("@contacts/deleteReguestError");
// ==================================================================
export const inputValue = createAction(VALUE, (e) => ({
  payload: e.target.value,
}));
