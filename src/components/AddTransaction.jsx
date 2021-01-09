import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import shortid from "shortid";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    //form validation
    if (text && amount) {
      e.preventDefault();

      const newTransaction = {
        id: shortid.generate(),
        text,
        amount: Number(amount),
      };

      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    } else {
      e.preventDefault();
      alert("fill all the field");
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            <span className="warning">note: </span>
            minus sign(-) should be given before expense
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
