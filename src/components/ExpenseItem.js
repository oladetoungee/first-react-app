import './ExpenseItem.css'

function ExpenseItem(props) {

    console.log(props)
   console.log(props)
    return (
    <div className='expense-item'>
        {/* <div>{props.date.toISOString()}</div> */}
        
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>N{props.amount}</div>
        </div>
    </div>
    )
}

export default ExpenseItem;