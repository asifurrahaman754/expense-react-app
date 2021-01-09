import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((transaction) => transaction.amount);
  const IncomeArr = amounts.filter((num) => num > 0);
  const ExpenseArr = amounts.filter((num) => num < 0);
  const Expense = ExpenseArr.reduce((acc, item) => (acc += item), 0);
  const Income = IncomeArr.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${Income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
