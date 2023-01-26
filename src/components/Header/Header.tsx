import React, { useState } from 'react'
import classes from './Header.module.css'

type HeaderPropsType = {
	database: Array<any>
	funds: Array<any>
}

function Header(props: HeaderPropsType) {
	const [value, setValue] = useState('')
	const addForm = (event: any): void => {
		event.preventDefault()
		console.log(value)
		const addFund: Array<any> = props.database.filter(
			fund => fund.name === value
		)
		const addedFund: any = addFund[0]
		const isFund: any = props.funds.some(fund => fund.name === addedFund?.name)

		if (!isFund) {
			//setArr(arr.push(addedFund))
		} else {
		}
		console.log(addFund)
		console.log(addedFund)
		console.log(isFund)
	}
	return (
		<div className={classes.container}>
			<div className={classes.logo}>ConverterFunds</div>
			<div className={classes.catalog}>Каталог</div>
			<form className={classes.form}>
				<input
					className={classes.input}
					value={value}
					onChange={event => setValue(event.target.value)}
					placeholder='Найти фонд'
				/>
				<button className={classes.button} onClick={addForm}>
					Добавить
				</button>
			</form>
			<div>Войти</div>
		</div>
	)
}

export default Header
