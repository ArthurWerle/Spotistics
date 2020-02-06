import ajaxSend from '../util/ajaxSend'

export default ( token, cb ) => {

    ajaxSend( 'https://api.spotify.com/v1/me/player/recently-played', 'GET', token, ( response ) => {
        if( cb ) cb( response )
    })

}