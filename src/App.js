import React, { Component } from "react"
import * as $ from "jquery"
import { authEndpoint, clientId, redirectUri, scopes } from "./config"
import hash from "./hash"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
    constructor() {
      super()
      this.state = {
          token: null,
          items: [
            { 
              track: {
                name: '',
                popularity: null,
                href: '',
                id: '',
                album: {
                  name: '',
                  release_date: '',
                  images: [
                    { 
                      height: '',
                      width: '',
                      url: ''
                    }
                  ]
                },
                artists: [
                  {
                    name: '',
                    id: '',
                    href: ''
                  }
                ]
              },
              played_at: ''
            }
          ]
      }

      this.getRecentlyPlayed = this.getRecentlyPlayed.bind(this)
  }

  componentDidMount() {
    // Set token
      let _token = hash.access_token;

      if( _token ) {

          this.setState({
              token: _token
          })

          this.getRecentlyPlayed( _token )
      }
  }

  getTopArtists( token ) {
      $.ajax({
          url: "https://api.spotify.com/v1/me/top/artists",
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
              <img src={logo} className="App-logo" alt="logo" />
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