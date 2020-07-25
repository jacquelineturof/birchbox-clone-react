import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Footer.module.css'

const Footer = () => (
    <footer className = { classes.Footer }>
        <div className = { classes.BrandContainer }>
            <h5 className = { classes.Brand }>Birchbox</h5>
        </div>
        <div className = { classes.SocialMediaLinksContainer }>
            <FontAwesomeIcon
                icon = { [ 'fab', 'facebook' ] } 
                className = { classes.Icon } />
            <FontAwesomeIcon
                icon = { [ 'fab', 'instagram' ] } 
                className = { classes.Icon } />
            <FontAwesomeIcon
                icon = { [ 'fab', 'twitter' ] } 
                className = { classes.Icon } />
        </div>
    </footer>
)

export default Footer