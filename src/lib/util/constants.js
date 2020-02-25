const sizes = {
    smallMobile: '375px',
    mobile: '425px',
}

export default {
    $GREEN_HEX_CODE: '#1bb952',
    $DEFAULT_TEXT_COLOR: 'white;',
    $DEFAULT_BORDER_RADIUS: '10px;',
    $LG_ICON_SIZE: '45px;',
    $MD_ICON_SIZE: '35px;',

    //screen sizes
    mobile:  `(max-width: ${ sizes.mobile })`,
    smallMobile:  `(max-width: ${ sizes.smallMobile })`,
}