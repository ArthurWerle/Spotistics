import React from "react"
import Track from "../track"
import { Grid, Section } from '../../../globalStyles'

function TopTracks( props ) {

    return (
        <Section>
            <h1> Your top tracks </h1>
            <Grid>
                { props.items.map( item => (
                    <Track 
                        key={ item.id }
                        name={ item.name }
                        artist={ item.artists[0].name }
                        img={ item.album.images[1].url }>
                    </Track>
                ))}
            </Grid>
        </Section>
        
    )

}

export default TopTracks 