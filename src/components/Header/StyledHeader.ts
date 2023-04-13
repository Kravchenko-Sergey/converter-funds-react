import styled from 'styled-components'

export const Wrapper = styled.div`
	background-color: white;
`

export const Container = styled.div`
	width: 80%;
	height: 70px;
	margin: 0 auto auto;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	column-gap: 10px;
	align-items: center;
`

export const List = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

export const Login = styled.li`
	grid-column: 4 / 5;
`

export const Logout = styled.li`
	grid-column: 5 / 6;
`
