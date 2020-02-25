export default async ( type, token ) => {

    const config = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ token }`
        }
    }

    let result = null

    try {
        const response = await fetch( `https://api.spotify.com/v1/me/top/${type}`, config )
        result = await response.clone().json()
    } catch( e ) {
        console.log( e )
    } finally {
        return result
    }


}