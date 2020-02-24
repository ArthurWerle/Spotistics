import React from "react"
import Track from "../track"
import { Grid, Section, Title } from '../../../globalStyles'

function TopArtists( props ) {

    return (
        <Section>
            <Title> Your top artists </Title>
            <Grid>
                { props.items.map( item => (
                    <Track 
                        key={ item.id }
                        name={ item.name }
                        img={ item.images[1].url }>
                    </Track>
                )) }
            </Grid>
        </Section>
        
    )

}

export default TopArtists 