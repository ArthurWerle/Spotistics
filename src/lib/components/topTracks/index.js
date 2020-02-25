import React from "react"
import Track from "../track"
import Message from "../message"
import MessageTypes from "../message/messageTypes"
import { Grid, Section, Title } from '../../../globalStyles'

function TopTracks( props ) {

    function buildGrid() {
        const isEmpty = () => {
            return !props.items?.length
        }

        if( isEmpty() ) {
            return (
                <Message type={ MessageTypes.SORRY } text="For some reason, didn't found your top tracks." />
            )
        } 

        return (
            <Grid>
                { props.items.map( item => (
                    <Track 
                        key={ item.id }
                        name={ item.name }
                        artist={ item.artists[0].name }
                        smallImg={ item.album.images[2].url }
                        largeImg={ item.album.images[1].url }>
                    </Track>
                ))}
            </Grid>
        )
    }

    return (
        <Section>
            <Title> Your top tracks </Title>
            { buildGrid() }
        </Section>
        
    )

}

export default TopTracks 