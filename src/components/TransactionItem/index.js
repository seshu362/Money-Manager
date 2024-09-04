// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, inputTitle, amount, type} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-details">
      <p className="history-para-heading ">{inputTitle}</p>
      <p className="history-para-heading ">{amount}</p>
      <p className="history-para-heading ">{type}</p>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
