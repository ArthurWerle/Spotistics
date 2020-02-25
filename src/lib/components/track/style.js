import styled from 'styled-components'
import constants from '../../util/constants'

export const TrackContainer = styled.div`
    display: block;
    text-align: center;
    width: min-content;
    flex: 1;
`

export const TrackArtist = styled.label`
    display: block;
    font-style: italic;
    font-size: 11px;

    @media ${ constants.mobile } {
        font-size: 8px !important;
    }
`

export const TrackName = styled.label`
    display: block;
    font-style: italic;
    font-weight: bolder;
    font-size: 16px;

    @media ${ constants.mobile } {
        font-size: 12px !important;
    }
`

export const TrackSmallImage = styled.img`
    max-width: 17em;
    max-height: 12em;
    width: auto;
    height: auto;
    display: none;
    font-size: 15px;

    @media ${ constants.mobile } {
        display: block !important;
        max-width: 64px;
        max-height: 64px;
    }
`

export const TrackLargeImage = styled.img`
    max-width: 17em;
    max-height: 12em;
    width: auto;
    height: auto;
    display: block;
    font-size: 15px;

    @media ${ constants.mobile } {
        display: none !important;
    }
`