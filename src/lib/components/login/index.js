import React from "react"
import { authEndpoint, clientId, redirectUri, scopes } from "../../../config"
import { LoginButton, Description } from './style'

function Login() {

    return (
        <>
            <h1> Spotistics </h1>
            <Description>
                Login with your spotify account and see your <em> most listened </em> tracks and artists
            </Description>

            <LoginButton
                href={
                    `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20") }
                    &response_type=token&show_dialog=true` 
                }>
                Login to Spotify
            </LoginButton>
        </>
    )

}

export default Login 