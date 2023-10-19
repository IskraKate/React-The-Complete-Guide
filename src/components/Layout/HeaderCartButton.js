import React, { useContext, useEffect, useState } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
  const { items } = cartCtx

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return
    }

    setBtnIsHighLighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ""}`

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
