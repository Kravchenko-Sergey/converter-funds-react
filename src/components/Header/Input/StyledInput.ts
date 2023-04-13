import styled from 'styled-components'

export const InputBlock = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 0.1fr;
	grid-template-rows: 1fr 0;
`
export const Input2 = styled.input`
	padding: 10px 0 10px 10px;
	font-size: 16px;
	border: 2px solid cornflowerblue;
	border-radius: 5px 0 0 5px;
	&:focus {
		border: 2px solid cornflowerblue;
		outline: none;
	}
`

export const Error = styled.div`
	padding: 0 0 0 10px;
	font-size: 14px;
	color: crimson;
`

export const Button = styled.button`
	color: white;
	background-color: cornflowerblue;
	border-style: none;
	border-radius: 0 5px 5px 0;
	&:hover {
		background-color: #3875ea;
		transition: 0.5s;
	}
	& img {
		width: 26px;
		height: 26px;
	}
`
