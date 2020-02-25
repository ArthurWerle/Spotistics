import styled from 'styled-components'
import constants from '../../util/constants'

export const Title = styled.h1`
    @media ${ constants.mobile } {
        font-size: 65px;
    }

    @media ${ constants.smallMobile } {
        font-size: 50px;
    }
`

export const Description = styled.p`
    margin-top: 0;
    margin-bottom: 5em;
    padding: 30px;
    text-align: center;

    @media ${ constants.mobile } {
        width: 60%;
        height: 6%;
        font-size: 15px !important;
        text-align: center;
        margin-bottom: 3em !important;
    }
`

export const LoginButton =  styled.a`
    border-radius: 2em;
    background: ${ constants.$GREEN_HEX_CODE };
    border: 0.2em solid ${ constants.$GREEN_HEX_CODE };
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 3vmin;
    padding: 0.7em 1.5em;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 auto;

    :hover {
        border: 0.2em solid #1ed760;
        background-color: #1ed760;
        color: rgb(255, 255, 255);
    }

    @media ${ constants.mobile } {
        width: 60%;
        height: 6%;
        font-size: 20px !important;
        text-align: center;
    }
`