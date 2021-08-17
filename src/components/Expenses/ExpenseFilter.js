import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter_control">
      <div className="filter_heading">Filter by year</div>

      <select value={props.selected} onChange={dropDownChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
