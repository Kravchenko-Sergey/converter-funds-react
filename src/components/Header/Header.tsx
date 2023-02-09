import React, { ChangeEvent, useState } from 'react'
import classes from './Header.module.css'
import { DatabaseType, FundsType } from '../../App'

type HeaderPropsType = {
	database: Array<DatabaseType>
	funds: Array<FundsType>
}

function Header(props: HeaderPropsType) {
	const [value, setValue] = useState('')
	const [funds, setFunds] = useState<Array<any>>(props.funds)
	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value)
	}
	const addFund = (value: string) => {
		console.log(props)
		const newFund = {
			name: value,
			issuer: 'qwwq',
			price: 4,
			quantity: 555
		}
		console.log(value)
		setFunds([...funds, newFund])
		console.log(funds)
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
				<button className={classes.button} onClick={() => addFund(value)}>
					Добавить
				</button>
			</div>
			<div>Войти</div>
		</div>
	)
}

export default Header
