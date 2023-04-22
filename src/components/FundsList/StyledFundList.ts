import styled from 'styled-components'

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	grid-auto-rows: auto;
	gap: 10px;
`

export const Total = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-row: 1 / 2;
	grid-column: 2 / 3;
`

export const FundsListTable = styled.table`
	grid-row: 2 / 3;
	grid-column: 2 / 3;
	border: 2px solid cornflowerblue;
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

export const CompaniesListTable = styled.table`
	grid-row: 3 / 4;
	grid-column: 2 / 3;
	border: 2px solid cornflowerblue;
	padding: 10px;
	border-radius: 5px;
`

export const Companies = styled.tbody`
	display: grid;
	row-gap: 5px;
`

export const Company = styled.tr`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	&:hover {
		background-color: lightgray;
	}
`

export const Property = styled.td`
	font-size: 14px;
`

export const TitlesC = styled(Titles)`
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const Filter = styled.div`
	grid-row: 3 / 4;
`
