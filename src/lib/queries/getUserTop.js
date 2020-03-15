import constants from '../util/constants'
const GET_DEFAULT_HEADERS_BY = constants.GET_DEFAULT_HEADERS_BY

export default async ( type, token ) => {

    let result = null

    try {
        const response = await fetch( `https://api.spotify.com/v1/me/top/${type}`, GET_DEFAULT_HEADERS_BY( token ) )


        result = await response.text()
        result = result === "" ? [] : JSON.parse(result)
    } catch( e ) {
        console.log( `getUserTop ${type}: ${e} ` )
    } finally {
        return result
    }


}