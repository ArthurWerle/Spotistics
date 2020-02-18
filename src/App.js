import React, { Component } from "react"
import hash from "./hash"
import "./App.css"

//components
import Login from './lib/components/login'
import Header from './lib/components/header'
import Greetings from './lib/components/greetings'
import TopTracks from './lib/components/topTracks'
import RecentlyPlayed from './lib/components/recentlyPlayed'
import TopArtists from './lib/components/topArtists'

//queries
import getUserTop from './lib/queries/getUserTop'
import getUser from './lib/queries/getUser'
import getRecentlyPlayed from './lib/queries/getRecentlyPlayed'


class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null,
            token: null,
            topTracks: [],
            topArtists: [],
            recentlyPlayed: []
        }

        this.getUser = getUser.bind(this)
        this.getRecentlyPlayed = getRecentlyPlayed.bind(this)
        this.getUserTop = getUserTop.bind(this)
    }

    executeQueries( token ) {
        getUser( token, ( response ) => {
            this.setState({
                user: response
            })
        })

        getRecentlyPlayed( token, ( response ) => {
            this.setState({
                recentlyPlayed: response.items
            })
        })

        getUserTop( 'tracks', token, ( response ) => {
            this.setState({
                topTracks: response.items
            })
        })

        getUserTop( 'artists', token, ( response ) => {
            this.setState({
                topArtists: response.items
            })
        })
    }

    componentDidMount() {
        let _token = hash.access_token;

        if( _token ) {
            this.setState({
                token: _token
            })

            this.executeQueries( _token )
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    { ! this.state.token && (
                        <div>
                            <Header/>
                            <Login/>
                        </div>
                    ) }
                    {/* { !this.state.token && (
                        <Login/>
                    ) } */}
                    { this.state.user && <Greetings user={this.state.user.display_name}/> }
                </header>
                <body className="app body">
                    <div className="main container">
                        <RecentlyPlayed items={ this.state.recentlyPlayed }/>
                        <TopArtists items={ this.state.topArtists }/>
                        <TopTracks items={ this.state.topTracks }/>
                    </div>
                </body>
            </div>
        );
    }
}

export default App;