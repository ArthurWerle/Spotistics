import React from "react"
import { TrackContainer, TrackName, TrackArtist, TrackImage } from './style'

function Track( props ) {

    return (
        <TrackContainer>
            <TrackImage src={ props.img }/>
            <TrackName>{ props.name }</TrackName> 
            <TrackArtist>{ props.artist }</TrackArtist> 
        </TrackContainer>
    )

}

export default Track 