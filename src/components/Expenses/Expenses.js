import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <Card className="card__custom">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
