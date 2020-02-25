import React from "react"
import { MessageHeader, Icon } from './style'
import { Section, Title } from '../../../globalStyles'
import constants from '../../util/constants'

function Message( props ) {

    function getTitle() {
        const getIconByType = () => {
            if( props.type.getIcon ) return props.type.getIcon()
        }

        const getTitleByType = () => {
            if( props.type.title ) return props.type.title
        }

        return (
            <MessageHeader>
                <Icon>
                    { getIconByType() }
                </Icon>
                <Title color='rgb(0,0,0);'>
                    { getTitleByType() }
                </Title>
            </MessageHeader>
        )
    }

    return (
        <Section color='white' borderRadius={ constants.$DEFAULT_BORDER_RADIUS }>
            { getTitle() }
            <p>{ props.text }</p>
        </Section>
        
    )

}

export default Message 