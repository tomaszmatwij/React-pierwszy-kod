import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter'
import './Expenses.css'

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020')

	const dropsDownChangeHandler = selectedYear => {
		setFilteredYear(selectedYear)
		console.log(selectedYear);

// ustawiamy domyślą wartość useState na 2020 i następnie ustawiamy wartość domyślną w wierszu 17 [selected]
	}
	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={dropsDownChangeHandler} />
			<ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
			<ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
			<ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
			<ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
		</Card>
	)
}

export default Expenses
