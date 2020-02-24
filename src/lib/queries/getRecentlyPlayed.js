export default async( token ) => {

    const config = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ token }`
        }
    }

    const response = await fetch( `https://api.spotify.com/v1/me/player/recently-played`, config )
    const result = await response.json()
    return result
}