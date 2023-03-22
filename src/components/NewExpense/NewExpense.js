import React, { useState } from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
  const [isFormShowing, setIsFormShowing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
    props.onAddExpense(expenseData)
  }

  const handleShowForm = () => {
    setIsFormShowing((prev) => !prev)
  }

  return (
    <div className="new-expense">
      {isFormShowing ? (
        <ExpenseForm  handleShowForm={handleShowForm} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={handleShowForm}>Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense
