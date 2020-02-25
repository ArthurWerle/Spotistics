import React from "react"
import { FaFrown, FaLaugh, FaSadTear } from 'react-icons/fa';

export default {
    SORRY: {
        code: 1,
        title: 'Sorry...',
        getIcon: () => ( <FaFrown/> )
    },
    ERROR: {
        code: 2,
        title: 'Ops..',
        getIcon: () => ( <FaSadTear/> )
    },
    SUCCESS: {
        code: 3,
        title: 'Done!',
        getIcon: () => ( <FaLaugh/> )
    }
}