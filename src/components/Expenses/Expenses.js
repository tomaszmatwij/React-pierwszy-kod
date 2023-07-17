import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
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

	

	//warunek który wyświetla nam informacje o braku wydatków, jesli nie ma wydatkó w danym roku.

	

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={dropsDownChangeHandler} />
			<ExpensesList items={filtiredEspenses}/>
			{/* {expensesContent} */}
		</Card>
	)
}

export default Expenses
