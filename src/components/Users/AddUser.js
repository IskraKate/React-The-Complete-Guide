import React from "react"
import Card from "../Card/Card"
import classes from './AddUser.module.css'

const AddUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  )
}

export default AddUser
