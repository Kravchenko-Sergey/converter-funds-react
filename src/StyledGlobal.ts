import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
},
*::before,
*::after {
}

body {
  min-height: 100vh;
  font-family: Roboto, sans-serif;
}
`

export const Wrapper = styled.div`
	margin: 0 auto;
`
