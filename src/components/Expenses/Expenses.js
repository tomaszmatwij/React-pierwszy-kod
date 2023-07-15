import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter'
import './Expenses.css'

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020')

	const dropsDownChangeHandler = selectedYear => {
		setFilteredYear(selectedYear)
		// console.log(selectedYear)

		// ustawiamy domyślą wartość useState na 2020 i następnie ustawiamy wartość domyślną w wierszu 17 [selected]
		// filterDate()
	}
	// const filterDate =(props) =>{
	// 	console.log(props.date.getFullYear());
	// }

	const filtiredEspenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear
	})
	//funkcja filtrująca, tworząca nową tablicę. filtruje rok wydatku z wybranym rokiem na stronie internetowej, funkcja jest wywoływana w wierszu 29 przy metodzie .map

	let expensesContent = <p> No expenses found</p>

	if (filtiredEspenses.length > 0) {
		expensesContent = filtiredEspenses.map(expense => (
			<ExpenseItem
				key={expense.id} //zawsze nadajemy na tablicę identyfikator key (klucz po id tablcy), aplikacja jest wydajnieszja i nie powoduje blędów
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		))
	}

	//warunek który wyświetla nam informacje o braku wydatków, jesli nie ma wydatkó w danym roku.

	

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={dropsDownChangeHandler} />
			{expensesContent}
		</Card>
	)
}

export default Expenses
