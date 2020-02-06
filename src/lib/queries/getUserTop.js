import ajaxSend from '../util/ajaxSend'

export default ( type, token, cb ) => {

    ajaxSend( `https://api.spotify.com/v1/me/top/${type}`, 'GET', token, ( response ) => {
        if( cb ) cb( response )
    })

}