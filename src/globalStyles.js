import styled from 'styled-components'
import constants from './lib/util/constants'

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

export const Title = styled.h1`
    color: ${ constants.$DEFAULT_TEXT_COLOR };
`

export const Footer = styled.footer`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ ({ color = 'white' }) => color  };
`

export const Source = styled( Footer )`
    background-color: ${ constants.$GREEN_HEX_CODE } !important;
    padding: 50px;
    color: ${ constants.$DEFAULT_TEXT_COLOR };
    text-align: center !important;
    display: block !important;

    > a {
        margin-left: 10px;
        border: none;
        font-size: 45px;
        color: black;
    }

    > div {
        margin-top: 2em;
    }
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
    padding: 50px 25px;
    justify-content: center;
    border-radius: 10px;
    display: grid;
    background-color: white;;
    grid-template-columns: repeat(5, 0fr);
    grid-gap: 10px;
`

export const Section = styled.div`
    padding: 30px;
`