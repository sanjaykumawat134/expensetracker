import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expenses_control">
        <label>Title</label>
        <input type="text" placeholder="expense description" />
      </div>
      <div className="new-expenses_control">
        <label>amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="expense amount"
        />
      </div>
      <div className="new-expenses_control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          placeholder="expense date"
        />
      </div>
      <div className="new-exense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
