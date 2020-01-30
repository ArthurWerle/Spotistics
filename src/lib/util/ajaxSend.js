import * as $ from "jquery"

export default ( url, type, token, cb ) => {

    $.ajax({
        url: url,
        type: type,
        beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: (data) => {
            cb( data )
        },
        error: function( error ) {
            console.log( error );
        }
    })
}