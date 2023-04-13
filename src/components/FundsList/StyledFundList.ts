import styled from 'styled-components'

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr 1fr 10fr;
	gap: 10px;
`

export const Total = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-row: 2 / 3;
	grid-column: 2 / 3;
`

export const FundsListTable = styled.table`
	grid-row: 3 / 4;
	grid-column: 2 / 3;
	border: 2px solid gray;
	padding: 10px;
	border-radius: 5px;
`

export const Titles = styled.tr`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const Title = styled.td`
	margin: 0 0 10px 0;
	font-weight: 700;
`

export const Funds = styled.tbody`
	display: grid;
	row-gap: 5px;
`
