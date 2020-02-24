import React from "react"
import Track from "../track"
import { Grid, Section } from '../../../globalStyles'

function RecentlyPlayed( props ) {

    return (
        <Section>
            <h1> Recently played </h1>
            <Grid>
                { props.items.map( item => (
                    <Track 
                        key={ item.track.id }
                        name={ item.track.name }
                        artist={ item.track.artists[0].name }
                        img={ item.track.album.images[1].url }>
                    </Track>
                )) }
            </Grid>
        </Section>
    )

}

export default RecentlyPlayed 