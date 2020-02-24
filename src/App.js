import React, { Component } from "react"
import hash from "./hash"
import { FaGithub } from 'react-icons/fa';

//components
import Login from './lib/components/login'
import Greetings from './lib/components/greetings'
import isUserLogged from './lib/util/isUserLogged'
import TopTracks from './lib/components/topTracks'
import RecentlyPlayed from './lib/components/recentlyPlayed'
import TopArtists from './lib/components/topArtists'
import Credits from './lib/components/credits'

//styled components
import {  AppHeader, MainContainer, Body, Footer, Source } from './globalStyles'

//util
import constants  from './lib/util/constants'

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
        const handleResponseBy = ({ type }) => {
            return ( response ) => {
                this.setState({
                    [ type ]: response.items ? response.items : response
                })
            } 
        }

        getUser( token ).then( handleResponseBy({ type: 'user' }) )
        getRecentlyPlayed( token ).then( handleResponseBy({ type: 'recentlyPlayed' }) )
        getUserTop( 'tracks', token ).then( handleResponseBy({ type: 'topTracks' } ))
        getUserTop( 'artists', token ).then( handleResponseBy({ type: 'topArtists' } ))
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
        const getPageFooter = () => {
            if( !isUserLogged( this.state ) ) {
                return ( 
                    <Footer>
                        <Credits/>
                    </Footer>
                )
            }

            
            return
        }

        const getPageHeader = () => {
            if( isUserLogged( this.state ) ) return

            return (
                <AppHeader className='login page'>
                    { !isUserLogged( this.state ) && <Login/> }
                    { isUserLogged( this.state ) && <Greetings user={this.state.user.display_name}/> }
                </AppHeader>
            )
        }

        const getAppMainPage = () => {
            if( isUserLogged( this.state ) ) {
                return (
                    <MainContainer className='mainContainer'>
                        <RecentlyPlayed items={ this.state.recentlyPlayed }/>
                        <TopArtists items={ this.state.topArtists }/>
                        <TopTracks items={ this.state.topTracks }/>
                        <Source>
                            <a href='https://github.com/ArthurWerle/Spotistics'> 
                                <FaGithub/> 
                            </a>
                            <Credits color={ constants.$DEFAULT_TEXT_COLOR }/>
                        </Source>
                    </MainContainer>
                )
            }
        }

        return (
            <Body className='body'>
                { getPageHeader() }
                { getAppMainPage() }
                { getPageFooter() }
            </Body>          
        );
    }
}

export default App;