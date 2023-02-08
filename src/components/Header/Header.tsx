import React, { ChangeEvent, useState } from 'react'
import classes from './Header.module.css'

type HeaderPropsType = {
	database: Array<any>
	funds: Array<any>
}

function Header(props: HeaderPropsType) {
	const [value, setValue] = useState('')
	const [funds, setFunds] = useState(props.funds)
	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value)
	}
	const addFund = (value: any) => {
		console.log(props)
		const newFund = {
			name: value,
			issuer: 'qwwq',
			price: 4,
			quantity: 555,
			image: 'reggsdf'
		}
		console.log(value)
		setFunds([...funds, newFund])
		console.log(funds)
	}
	const handleButton = () => {
		addFund(value)
		setValue('')
	}
	/*const addForm = (event: any): void => {
		const addFund: Array<any> = props.database.filter(
			fund => fund.name === value
		)
		const addedFund: any = addFund[0]
		const isFund: any = props.funds.some(fund => fund.name === addedFund.name)

		if (!isFund) {
			console.log('1')
		} else {
			console.log('2')
		}
	}*/
	return (
		<div className={classes.container}>
			<div className={classes.logo}>ConverterFunds</div>
			<div className={classes.catalog}>Каталог</div>
			<div className={classes.form}>
				<input
					className={classes.input}
					value={value}
					onChange={handleInput}
					placeholder='Найти фонд'
				/>
				<button className={classes.button} onClick={handleButton}>
					Добавить
				</button>
			</div>
			<div>Войти</div>
		</div>
	)
}

export default Header
