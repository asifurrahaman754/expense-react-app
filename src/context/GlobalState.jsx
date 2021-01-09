import React, { useReducer } from "react";
import Reducer from "./AppReducer";

//Initial state
const initialState = {
  transaction: [],
};

//create createContext
export const GlobalContext = React.createContext();

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //delete action
  function deleteTransaction(id) {
    dispatch({
      type: "delete_transaction",
      payload: id,
    });
  }
  //add action
  function addTransaction(transaction) {
    dispatch({
      type: "add_transaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
