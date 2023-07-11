import './ExpenseDate.css'

const ExpenseDate = (props) =>{
	const month = props.date.toLocaleString('pl-PL', { month: 'long' }) //pobiera sam miesiąc i dzięki opcji long wpisauje jego pełną nazwę
	const year = props.date.getFullYear()
	const day = props.date.toLocaleString('pl-PL', { day: '2-digit' }) //pobiera dzień i dzięki opcji 2-digit używa liczby dwucyfrowej


		// const month = props.date.toLocaleString('pl-PL', { month: 'long' }) //pobiera sam miesiąc i dzięki opcji long wpisauje jego pełną nazwę
	// const year = props.date.getFullYear()
	// const day = props.date.toLocaleString('pl-PL', { day: '2-digit' }) //pobiera dzień i dzięki opcji 2-digit używa liczby dwucyfrowej

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	)
}
export default ExpenseDate
