import styled from 'styled-components'
import constants from '../../util/constants'

export const MessageHeader = styled.div`
    > div, h1 {
        display: inline-block !important
    }
`

export const Icon = styled.div`
    margin-right: 0.4em;
    font-size: ${ constants.$MD_ICON_SIZE }
`