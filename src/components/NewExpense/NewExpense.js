import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAdding, setAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAdding(false);
  };
  const showExpenseFormHandler = () => {
    setAdding(true);
  };
  const cancelExpenseFormHandler = () => {
    setAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={showExpenseFormHandler} type="button">
          Add New Expenses
        </button>
      )}
      {isAdding && <ExpenseForm onCancel={cancelExpenseFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
