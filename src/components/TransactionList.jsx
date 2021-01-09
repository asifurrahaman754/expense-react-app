import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <h3>All Transaction</h3>
      <ul className="list">
        {transaction.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
