import React, { useEffect, useState } from "react"
import classes from './ResultTable.module.css'

const ResultsTable = (props) => {
  const [data, setData] = useState(props.results)

  useEffect(() => {
    if (props.results) {
      setData(props.results)
    }
  }, [props.results])

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumIntegerDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)} </td>
            <td>
              {formatter.format(yearData.savingsEndOfYear -
                props.initialInvestment -
                yearData.yearlyContribution * yearData.year)}
            </td>
            <td>
              {formatter.format(props.initialInvestment +
                yearData.yearlyContribution * yearData.year)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ResultsTable
