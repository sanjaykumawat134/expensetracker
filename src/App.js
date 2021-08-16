import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurence",
      amount: 294,
      date: new Date(2021, 8, 14),
    },
    {
      id: 1,
      title: "Food",
      amount: 294,
      date: new Date(2021, 8, 14),
    },
    {
      id: 1,
      title: "lorem",
      amount: 294,
      date: new Date(2021, 8, 14),
    },
    {
      id: 1,
      title: "furniture",
      amount: 294,
      date: new Date(2021, 8, 14),
    },
  ];
  // const ExpenseElem = React.createElement(Expenses, { items: expenses });
  return (
    <div>
      <h2>Lets get started with react</h2>
      <NewExpenses></NewExpenses>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
