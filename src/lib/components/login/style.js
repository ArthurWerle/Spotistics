import styled from 'styled-components'

export const Description = styled.p`
    margin-top: 0;
    margin-bottom: 5em;
`

export const LoginButton =  styled.a`
    border-radius: 2em;
    background: #1bb952;
    border: 0.2em solid #1bb952;
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 3vmin;
    padding: 0.7em 1.5em;
    text-transform: uppercase;
    transition: all 0.25s ease;
    text-decoration: none;
    margin: 0 auto;

    :hover {
        border: 0.2em solid #1ed760;
        background-color: #1ed760;
        color: rgb(255, 255, 255);
    }
`