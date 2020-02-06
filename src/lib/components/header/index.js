import React from "react"

function Header( props ) {

    return (
        <div>
            <div>Bem-vindo, {props.user}</div>
            <div>Aqui estão algumas estatíscas sobre a sua conta do Spotify</div>
        </div>
    )

}

export default Header 