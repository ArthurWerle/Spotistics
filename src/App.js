import React, { Component } from "react"
import * as $ from "jquery"
import { authEndpoint, clientId, redirectUri, scopes } from "./config"
import hash from "./hash"
import "./App.css"

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

    send( url, token, cb ) {
        $.ajax({
            url: url,
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: (data) => {
                cb( data )
            },
            error: function( error ) {
                console.log( error );
            }
        })
    }

    getUserTopArtistsOrTracks( token, type ) {
        this.send( `https://api.spotify.com/v1/me/top/${type}`, token, ( response ) => {
            this.setState({
                user: response
            })
        })
    }

    getUser( token ) {
        this.send( 'https://api.spotify.com/v1/me', token, ( response ) => {
            this.setState({
                user: response
            })
        })
    }

    getTopArtists( token ) {
        this.send( 'https://api.spotify.com/v1/me/top/artists', token, ( response ) => {
            this.setState({
                items: response.items
            })
        })
    }

    getRecentlyPlayed( token ) {
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/recently-played",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: (data) => {

                this.setState({
                    items: data.items
                })

            },
            error: function( error ) {
                console.log( error );
            }
        })
  }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    { ! this.state.token && <div className="app header">Spotistics</div> }
                    { !this.state.token && (
                        <a className="btn btn--loginApp-link"
                            href={
                                `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20") }
                                &response_type=token&show_dialog=true` 
                            }>
                            Login to Spotify
                        </a>
                    ) }
                    <ul>
                    { this.state.user && <div>Bem-vindo, {this.state.user.display_name}</div> }
                    {this.state.items.map( item => (
                        <li key={item.track.id}>
                        <div>Música: {item.track.name}</div>
                        <div>Álbum: {item.track.album.name}</div>
                        </li>
                    ))}
                    </ul>
                </header>
            </div>
        );
    }
}

export default App;