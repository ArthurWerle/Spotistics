import constants from '../util/constants'
const GET_DEFAULT_HEADERS_BY = constants.GET_DEFAULT_HEADERS_BY

export default async ( token ) => {
    const response = await fetch( `https://api.spotify.com/v1/me`, GET_DEFAULT_HEADERS_BY( token ) )
    const result = await response.json()
    return result
}