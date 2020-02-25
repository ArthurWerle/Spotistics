import React from "react"
import { TrackContainer, TrackName, TrackArtist, TrackSmallImage, TrackLargeImage } from './style'

function Track( props ) {

    return (
        <TrackContainer>
            <TrackSmallImage src={ props.smallImg }/>
            <TrackLargeImage src={ props.largeImg }/>
            <TrackName>{ props.name }</TrackName> 
            <TrackArtist>{ props.artist }</TrackArtist> 
        </TrackContainer>
    )

}

export default Track 