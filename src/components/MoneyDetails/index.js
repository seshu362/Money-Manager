// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="MoneyDetails-container">
      <div className="balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="img"
          />
        </div>
        <div>
          <p className="para">Your Balance</p>
          <p className="rupees-para" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="img"
          />
        </div>
        <div>
          <p className="para">Your Income</p>
          <p className="rupees-para" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="img"
          />
        </div>
        <div>
          <p className="para">Your Expenses</p>
          <p className="rupees-para" data-testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
