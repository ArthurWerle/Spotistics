import React from "react"
import Track from "../track"
import { Grid, Section } from '../../../globalStyles'

function TopArtists( props ) {

    return (
        <Section>
            <h1> Your top artists </h1>
            <Grid>
                { props.items.map( item => (
                    <Track 
                        key={ item.id }
                        artist={ item.name }
                        img={ item.images[1].url }>
                    </Track>
                )) }
            </Grid>
        </Section>
        
    )

}

export default TopArtists 