import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });                    //we may recieve incorrect previous snapshot,beacause react schedule state update, so using annonymouse function react ensures that we recieve correct previous state snapshot

    // setUserInput(() => {
    //   return { ...userInput, enteredDate: event.target.value };
    // });
  };
  const expenseFormHandler = (event) => {
    event.preventDefault();
    console.log("form submitted");
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={expenseFormHandler}>
      <div className="new-expenses_control">
        <label>Title</label>
        <input
          type="text"
          onChange={titleChangeHandler}
          value={enteredTitle}
          placeholder="expense description"
        />
      </div>
      <div className="new-expenses_control">
        <label>amount</label>
        <input
          type="number"
          onChange={amountChangeHandler}
          min="0.01"
          step="0.01"
          placeholder="expense amount"
          value={enteredAmount}
        />
      </div>
      <div className="new-expenses_control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={enteredDateHandler}
          placeholder="expense date"
          value={enteredDate}
        />
      </div>
      <div className="new-exense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
