import React, { Component } from "react"
import hash from "./hash"
import "./App.css"

import ajaxSend from './lib/util/ajaxSend'
import Login from './lib/components/login'
import Track from './lib/components/track'
import Header from './lib/components/header'

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null,
            token: null,
            items: []
        }

        this.getRecentlyPlayed = this.getRecentlyPlayed.bind(this)
        this.getUser = this.getUser.bind(this)
    }

    componentDidMount() {
        let _token = hash.access_token;

        if( _token ) {
            this.setState({
                token: _token
            })

            this.getUser( _token )
            this.getRecentlyPlayed( _token )
        }
    }

    getUserTopArtistsOrTracks( token, type ) {
        ajaxSend( `https://api.spotify.com/v1/me/top/${type}`, 'GET', token, ( response ) => {
            this.setState({
                user: response
            })
        })
    }

    getUser( token ) {
        ajaxSend( 'https://api.spotify.com/v1/me', 'GET', token, ( response ) => {
            this.setState({
                user: response
            })
        })
    }

    getTopArtists( token ) {
        ajaxSend( 'https://api.spotify.com/v1/me/top/artists', 'GET', token, ( response ) => {
            this.setState({
                items: response.items
            })
        })
    }

    getRecentlyPlayed( token ) {
        ajaxSend( 'https://api.spotify.com/v1/me/player/recently-played', 'GET', token, ( response ) => {
            this.setState({
                items: response.items
            })
        })
    }

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
                            <Track name={item.track.name}
                                artist={item.track.artists[0].name}
                                img={item.track.album.images[1].url}>
                            </Track>
                        ))}
                    </div>
                </body>
            </div>
        );
    }
}

export default App;