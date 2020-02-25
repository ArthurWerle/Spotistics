import React, { Component } from "react"
import hash from "./hash"
import { FaGithub } from 'react-icons/fa';

//components
import Login from './lib/components/login'
import isUserLogged from './lib/util/isUserLogged'
import TopTracks from './lib/components/topTracks'
import RecentlyPlayed from './lib/components/recentlyPlayed'
import TopArtists from './lib/components/topArtists'
import Credits from './lib/components/credits'

//styled components
import {  AppHeader, MainContainer, Body, Footer, Source, Loader } from './globalStyles'

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
            loading: false,
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
                if( !response ) return
                
                this.setState({
                    [ type ]: response.items ? response.items : response
                })
            } 
        }

        return new Promise( async ( resolve, reject ) => {
            try {
                await getUser( token ).then( handleResponseBy({ type: 'user' }) )
                await getRecentlyPlayed( token ).then( handleResponseBy({ type: 'recentlyPlayed' }) )
                await getUserTop( 'tracks', token ).then( handleResponseBy({ type: 'topTracks' } ))
                await getUserTop( 'artists', token ).then( handleResponseBy({ type: 'topArtists' } ))
            } catch( e ) {
                reject( e )
                throw e
            }
            
            resolve()
        })

    }

    componentDidMount() {
        const startLoading = () => {
            this.setState({
                loading: true
            })
        }

        const stopLoading = () => {
            this.setState({
                loading: false
            })
        }

        let _token = hash.access_token
        
        if( _token ) {
            startLoading()
            this.setState({
                token: _token
            })

            this.executeQueries( _token ).then( stopLoading )
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

        const geLoader = () => {
            return (
                <Loader>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loader>
            )
        }

        return (
            <Body className='body'>
                { getPageHeader() }
                { !this.state.loading && getAppMainPage() }
                { this.state.loading && geLoader() }
                { getPageFooter() }
            </Body>          
        );
    }
}

export default App;