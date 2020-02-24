import styled from 'styled-components'

export const Container = styled.div`
    font-style: italic;
    font-size: 14px;
    justify-content: center;
    color: ${ ({ color }) => color }
`

export const Icon = styled.span`
    color: #F00
`