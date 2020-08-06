import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import "../FindContact/FindContact.css";
import { inputValue } from "../../redux/actions/contactsAction";
import { deleteContact } from "../../redux/operations/contactsOperations";
import {
  contactsFilterSelector,
  contactsItemsSelector,
  getFilteredSelector,
} from "../../redux/selectors/contacts-selectors";

const FindContact = ({ inputValue, deleteContact, result }) => {
  return (
    <>
      {result.length > 1 && (
        <div className="search-container">
          <span>Find contacts by name</span>
          <br></br>
          <input type="text" onChange={inputValue}></input>
        </div>
      )}
      <div className="search_info">
        <TransitionGroup component="ul" className="contact_list">
          {result.map((item) => (
            <CSSTransition key={item.id} classNames="list__item" timeout={800}>
              <li className="contact_item" key={item.id}>
                {item.name} : {item.number}
                <button
                  className="delete_btn"
                  type="button"
                  onClick={() => deleteContact(item.id)}
                >
                  Delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  filter: contactsFilterSelector(state),
  contacts: contactsItemsSelector(state),
  result: getFilteredSelector(state),
});

const mapDispatchToProps = {
  inputValue,
  deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindContact);

FindContact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
