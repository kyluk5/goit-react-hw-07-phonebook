export const contactsSelector = (state) => state.contacts.items;

export const contactsFilterSelector = (state) => state.contacts.filter;
export const contactsItemsSelector = (state) => state.contacts.items;

export const getFilteredSelector = (state) => {
  const contacts = contactsSelector(state);
  const filter = contactsFilterSelector(state).toLowerCase();

  return contacts.filter((item) => item.name.toLowerCase().includes(filter));
};
