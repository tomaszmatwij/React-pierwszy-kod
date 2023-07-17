import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {
	// let expensesContent = <p> </p>

	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses found</h2>
	} else {
		return (
			<ul clasName="expenses-list">
				{props.items.map(expense => (
					<ExpenseItem
						key={expense.id} //zawsze nadajemy na tablicę identyfikator key (klucz po id tablcy), aplikacja jest wydajnieszja i nie powoduje blędów
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</ul>
		)
	}
}
export default ExpensesList
