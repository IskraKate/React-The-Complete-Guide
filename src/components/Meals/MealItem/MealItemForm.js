import React, { useRef, useState } from "react"
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"

const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!isValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm
