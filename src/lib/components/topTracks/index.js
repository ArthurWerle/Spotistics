import React from "react"
import Track from "../track"

function TopTracks( props ) {

    return (
        props.items.map( item => (
            <Track 
                name={ item.name }
                artist={ item.artists[0].name }
                img={ item.album.images[1].url }>
            </Track>
        ))
    )

}

export default TopTracks 