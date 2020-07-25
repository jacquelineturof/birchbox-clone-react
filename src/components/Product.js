import React from 'react'

import Rating from './Rating'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Product.module.css'

const Product = ({ title, imageUrl, rating, price }) => {
    return (
        <div className = { classes.Container }>
            <FontAwesomeIcon
                icon = { [ 'fal', 'heart' ] } 
                className = { classes.Icon } />
            <img 
                src = { require("../Assets/" + imageUrl) } 
                className = { classes.Image } 
                alt = "product" />
            <h5>{ title }</h5>
            <Rating rating = { rating } />
            <p>${ price }</p>
        </div>
    )
}

export default Product