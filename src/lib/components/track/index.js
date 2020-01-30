import React from "react"

function Track( props ) {

    return (
        <div className="track container">
            <img className="track item" src={props.img}/>
            <label className="track item" >{props.name}</label> 
            <label className="track item" >{props.artist}</label> 
        </div>
    )

}

export default Track 