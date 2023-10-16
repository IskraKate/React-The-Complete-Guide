import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import ResultsTable from "./components/ResultsTable/ResultsTable"
import UserInput from "./components/UserInput/UserInput"

function App() {
  const [userInput, setUserInput] = useState()
  const [results, setResults] = useState()

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }

  useEffect(() => {
    if (userInput) {
      const yearlyData = [] // per-year results

      let currentSavings = +userInput["current-savings"]
      const yearlyContribution = +userInput["yearly-contribution"]
      const expectedReturn = +userInput["expected-return"] / 100
      const duration = +userInput["duration"]

      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn
        currentSavings += yearlyInterest + yearlyContribution
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        })
      }

      setResults(yearlyData)
    }
  }, [userInput])

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && <p style={{textAlign: 'center'}}>No investments calculated yet.</p>}
      {userInput && (
        <ResultsTable
          results={results}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  )
}

export default App
