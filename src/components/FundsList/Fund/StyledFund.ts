import styled from 'styled-components'
import { Button } from '../../Header/Input/StyledInput'

export const Properties = styled.tr`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const Property = styled.td``

export const PropertyButtons = styled.td`
	display: grid;
	grid-template-columns: 0.4fr 0.4fr 1.2fr;
	column-gap: 5px;
`

export const DeleteButton = styled(Button)`
	padding: 4px 8px;
	background-color: crimson;
	border-radius: 5px;
`
