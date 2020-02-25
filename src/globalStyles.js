import styled from 'styled-components'
import constants from './lib/util/constants'

export const Loader = styled.div`
    display: inline-block;
    position: absolute;
    left: 49%;
    top: 40%;
    width: 80px;
    height: 80px;

    @media ${ constants.mobile } {
        left: 41% !important;
    }

    div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
    }

    div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(1);
        }
    }
        
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(0);
        }
    }

    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }

        100% {
            transform: translate(24px, 0);
        }
    }
`

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
    color: ${ ({ color = constants.$DEFAULT_TEXT_COLOR }) => color };
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
        font-size: ${ constants.$LG_ICON_SIZE };
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

    @media ${ constants.mobile } {
        grid-template-columns: repeat(4, 0fr);
    }

    @media ${ constants.smallMobile } {
        grid-template-columns: repeat(3, 0fr);
    }
`

export const Section = styled.div`
    padding: 30px;
    background-color: ${ ({ color }) => color  };
    border-radius: ${ ({ borderRadius })  => borderRadius };
`