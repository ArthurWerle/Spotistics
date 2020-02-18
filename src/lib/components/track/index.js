import React from "react"
import { TrackContainer, TrackText, TrackImage } from './style'

function Track( props ) {

    return (
        <TrackContainer>
            <TrackImage src={props.img}/>
            <TrackText >{props.name}</TrackText> 
            <TrackText >{props.artist}</TrackText> 
        </TrackContainer>
    )

}

export default Track 