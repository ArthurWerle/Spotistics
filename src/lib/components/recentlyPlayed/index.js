import React from "react"
import Track from "../track"

function RecentlyPlayed( props ) {

    return (
        props.items.map( item => (
            <Track 
                name={ item.track.name }
                artist={ item.track.artists[0].name }
                img={ item.track.album.images[1].url }>
            </Track>
        ))
    )

}

export default RecentlyPlayed 