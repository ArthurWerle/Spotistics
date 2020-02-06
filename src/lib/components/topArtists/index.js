import React from "react"
import Track from "../track"

function TopArtists( props ) {

    return (
        props.items.map( item => (
            <Track 
                artist={ item.name }
                img={ item.images[1].url }>
            </Track>
        ))
    )

}

export default TopArtists 