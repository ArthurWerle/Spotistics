import React from "react"
import { authEndpoint, clientId, redirectUri, scopes } from "../../../config"
import { LoginButton } from './style'

function Login() {

    return (
        <LoginButton
            href={
                `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20") }
                &response_type=token&show_dialog=true` 
            }>
            Login to Spotify
        </LoginButton>
    )

}

export default Login 