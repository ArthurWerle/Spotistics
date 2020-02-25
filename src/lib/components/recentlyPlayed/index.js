import React from "react"
import Track from "../track"
import { Grid, Section, Title } from '../../../globalStyles'

function RecentlyPlayed( props ) {

    return (
        <Section>
            <Title> Recently played </Title>
            <Grid>
                { props.items.map( item => (
                    <Track 
                        key={ item.track.id }
                        name={ item.track.name }
                        artist={ item.track.artists[0].name }
                        smallImg={ item.track.album.images[2].url }
                        largeImg={ item.track.album.images[1].url }>
                    </Track>
                )) }
            </Grid>
        </Section>
    )

}

export default RecentlyPlayed 