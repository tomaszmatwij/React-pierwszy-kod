import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
        

        // console.log(expenseData)
        props.onAddExpense(expenseData)
        //utworzysliśmy funkcję która jest zapisana w wierszu 17[<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />] funkcja ta jest wywołana w komponencie ExpenseForm.js  w wierszu 27 [props.onSaveExpenseData(expenseData)], dzięki czemy przekazujemy dane z obiektu do komponentu NewExpense.js
	}

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpense
