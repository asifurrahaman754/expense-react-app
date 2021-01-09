import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

const Index = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        {transaction.length ? <TransactionList /> : ""}
        <AddTransaction />
      </div>
    </>
  );
};

export default Index;
