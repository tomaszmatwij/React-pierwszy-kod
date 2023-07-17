import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value)
	}
	const amountChangeHandler = event => {
		setEnteredAmount(parseFloat(event.target.value))
	}
	const dateChangeHander = event => {
		setEnteredDate(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault() //blokuje przeładowanie się strony po kliknięciu przyciusku
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
			//obiekt przechowuje wprowadzone dane w formularzu do utworzenia nowego bloku z wydatkiem
		}
		props.onSaveExpenseData(expenseData)
		//przekazujemy dane z obiektu do komponentu NewExpense.js

		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
		//czyścimy wartości w formularzu dla tytułu, kwoty i daty i dzięki ustawieniu VALUE w formularzu dla poszczeególnych elementó, formularz czyści się
	}

	const [showForm, setShowForm] = useState(false)
	const showFormPanel = () => {
		setShowForm(true)
	}

	const hiddenFormPanel = () => {
		setShowForm(false)
	}

	if (showForm) {
		return (
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHander} />
					</div>
					<div className="new-expense__actions">
						<button onClick={hiddenFormPanel}>Cancel</button>
						<button type="submit">Add Expense </button>
					</div>
				</div>
			</form>
		)
	} else {
		return <button onClick={showFormPanel}>Add Expense</button>
	}
}
export default ExpenseForm
