import { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");
  const changeFilterHandler = (selectedValue) => {
    setFilteredYear(selectedValue);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="card__custom">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      ></ExpenseFilter>
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses}></ExpensesList>
      {/* {filteredExpenses.length ===0 && <p>no expense found</p>}      //javascirpt will return part behind  && after checking a condition */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      */}
      {/* {expensesContent} */}
    </Card>
  );
}

export default Expenses;
