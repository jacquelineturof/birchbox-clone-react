import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Rating.module.css'

const Star = () => (
    <div className = { classes.Star }>
        <FontAwesomeIcon
            icon = { [ 'fal', 'star' ] } 
            className = { classes.Icon } />
    </div>
)

const Rating = ({ rating }) => {
    const stars = []

    for (let i = 0; i < rating; i++) {
        stars.push(<Star key = { i } />)
    }

    return (
        <div className = { classes.Container }> 
            { stars }
        </div>
    )
}

export default Rating