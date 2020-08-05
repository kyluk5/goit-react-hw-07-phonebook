// import { createStore, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/contactsReducer";
// import logger from "redux-logger";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const defaultMidleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware: [...defaultMidleware],
});

export default store;
