import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   // console.log("button click");
  //   setTitle("life insurence");
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2>{props.title}</h2>
      <div className="expense-item expense-item__amount">${props.amount}</div>
      {/* <button onClick={clickHandler}>change title</button> */}
    </Card>
  );
}

export default ExpenseItem;
