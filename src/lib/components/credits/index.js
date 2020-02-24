import React from "react"
import { FaHeart } from 'react-icons/fa';
import { Container, Icon } from './style'

const linkedinLink = 'https://www.linkedin.com/in/arthur-werle-a8635a114/'

function Credits( props ) {

    return (
        <Container color={ props.color }>
            <label>Made with </label>
            <Icon> <FaHeart/></Icon>
            <span> by </span>
            <a href={ linkedinLink }> <span>me</span> </a>
        </Container>
    )

}

export default Credits 