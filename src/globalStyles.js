import styled from 'styled-components'

export const Body = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
`

export const Footer = styled.footer`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AppHeader = styled.div`
    flex: 5;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: rgb(0, 0, 0);
`

export const MainContainer = styled.div`
`

export const Grid = styled.div`
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
`

export const Section = styled.div`
    padding: 30px;
`