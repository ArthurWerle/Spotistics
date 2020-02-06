import React, { Component } from "react"
import hash from "./hash"
import "./App.css"

import ajaxSend from './lib/util/ajaxSend'
import Login from './lib/components/login'
import Track from './lib/components/track'
import Header from './lib/components/header'
import getUserTopArtistsOrTracks from './lib/queries/getUserTopArtistsOrTracks'
import getUser from './lib/queries/getUser'

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null,
            token: null,
            items: []
        }

        this.getUserTopArtistsOrTracks = getUserTopArtistsOrTracks.bind(this)
        this.getUser = getUser.bind(this)
    }

    componentDidMount() {
        let _token = hash.access_token;

        if( _token ) {
            this.setState({
                token: _token
            })

            getUser( _token, ( response ) => {
                this.setState({
                    user: response
                })
            })

            getUserTopArtistsOrTracks( _token, 'tracks', ( response ) => {
                this.setState({
                    items: response.items
                })
            })
        }
    }

    getTopArtists( token ) {
        ajaxSend( 'https://api.spotify.com/v1/me/top/artists', 'GET', token, ( response ) => {
            this.setState({
                items: response.items
            })
        })
    }

    // getRecentlyPlayed( token ) {
    //     ajaxSend( 'https://api.spotify.com/v1/me/player/recently-played', 'GET', token, ( response ) => {
    //         this.setState({
    //             items: response.items
    //         })
    //     })
    // }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    { ! this.state.token && <div className="app header">Spotistics</div> }
                    { !this.state.token && (
                        <Login/>
                    ) }
                    { this.state.user && <Header user={this.state.user.display_name}/> }
                </header>
                <body className="app body">
                    <div className="main container">
                        {this.state.items.map( item => (
                            <Track 
                                name={item.name}
                                artist={item.artists[0].name}
                                img={item.album.images[1].url}>
                            </Track>
                        ))}
                    </div>
                </body>
            </div>
        );
    }
}

export default App;