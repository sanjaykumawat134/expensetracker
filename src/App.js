import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurence",
    amount: 294,
    date: new Date(2021, 8, 14),
  },
  {
    id: 2,
    title: "Food",
    amount: 294,
    date: new Date(2021, 8, 14),
  },
  {
    id: 3,
    title: "lorem",
    amount: 294,
    date: new Date(2021, 8, 14),
  },
  {
    id: 4,
    title: "furniture",
    amount: 294,
    date: new Date(2021, 8, 14),
  },
];
function App() {
  // const ExpenseElem = React.createElement(Expenses, { items: expenses });
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseDataHandler = (expense) => {
    // expenses.push({ ...newExpenseData });
    // setExpenses([ expense,...expenses]);
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense];
    });
    console.log(expenses);
  };
  return (
    <div>
      <h2>Lets get started with react</h2>
      <NewExpenses onExpenseDataAdd={addExpenseDataHandler}></NewExpenses>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
