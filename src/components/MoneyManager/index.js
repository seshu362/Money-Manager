import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    inputTitle: '',
    inputAmount: '',
    optionId: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onChangeInputTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeInputAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, optionId} = this.state
    const selectedType = transactionTypeOptions.find(
      eachType => eachType.optionId === optionId,
    )
    const {displayText} = selectedType
    const newHistoryList = {
      id: uuidv4(),
      inputTitle,
      amount: parseInt(inputAmount),
      type: displayText,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistoryList],
      inputTitle: '',
      inputAmount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getBalance = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    historyList.forEach(eachHistory => {
      if (eachHistory.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachHistory.amount
      } else {
        expensesAmount += eachHistory.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0

    historyList.forEach(eachHistory => {
      if (eachHistory.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachHistory.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {historyList} = this.state
    let expensesAmount = 0
    historyList.forEach(eachHistory => {
      if (eachHistory.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachHistory.amount
      }
    })
    return expensesAmount
  }

  deleteHistory = id => {
    const {historyList} = this.state

    const filteredHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({historyList: filteredHistoryList})
  }

  render() {
    const {inputTitle, inputAmount, optionId, historyList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="first-container-heading ">Hi, Richard</h1>
          <p className="first-container-para">
            Welcome back to your
            <span className="money-manager-para">Money Manager</span>
          </p>
        </div>
        <div className="second-container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="thrid-container">
          <div className="input-container">
            <h1 className="add-heading">Add Transaction</h1>
            <label className="label-heading" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              className="input"
              value={inputTitle}
              onChange={this.onChangeInputTitle}
            />
            <label className="label-heading" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              placeholder="AMOUNT"
              className="input"
              value={inputAmount}
              onChange={this.onChangeInputAmount}
            />
            <label className="label-heading" htmlFor="select">
              TYPE
            </label>
            <select
              id="select"
              className="input"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="btn-add"
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-table-container">
              <li className="history-details">
                <p className="history-para-heading ">TITLE</p>
                <p className="history-para-heading ">amount</p>
                <p className="history-para-heading ">type</p>
              </li>
              {historyList.map(eachHistory => (
                <TransactionItem
                  historyDetails={eachHistory}
                  key={eachHistory.id}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
