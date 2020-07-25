import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './DropDownMenu.module.css'

const DROP_DOWN_LINKS = [
    { label: 'Your Lists', icon: 'heart', route: '/lists' },
    { label: 'Loyalty Program', icon: 'certificate', route: '/loyalty' },
    { label: 'Your Profile', icon: 'check-circle', route: '/profile' },
    { label: 'Order History', icon: 'clock', route: '/history' },
    { label: 'Account Settings', icon: 'cog', route: '/settings' },
    { label: 'Log Out', icon: 'sign-out', route: '/logout' }
]

const Control = ({ label, isOpen, setIsOpen  }) => {
    const icon = isOpen ? 'chevron-up' : 'chevron-down'
    const cssClasses = [ classes.Control ]
    
    if (isOpen) cssClasses.push(classes.Open)

    return (
        <div 
            className = { cssClasses.join(' ') }
            onClick = { () => setIsOpen(!isOpen) }>
            <h5 className = { classes.Label }>{ label }</h5>
            <FontAwesomeIcon
                icon = { [ 'fal', icon ] } 
                className = { classes.Icon } />
        </div>
    )
}

const Link = ({ label, icon, route }) => (
    <NavLink to = {route } className = { classes.NavLink }>
        <FontAwesomeIcon
            icon = { [ 'fal', icon ] } 
            className = { classes.MenuIcon } />
        <p className = { classes.Label }>{ label }</p>
    </NavLink>
)

const Menu = () => (
    <ul className = { classes.Menu }>
        { DROP_DOWN_LINKS.map(link => <Link key = { link.label } { ...link } />)}
    </ul>
)

const DropDownMenu = ({ label }) => {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className = { classes.DropDownMenu }>
            <Control label = { label } isOpen = { isOpen } setIsOpen = { setIsOpen } />
            { isOpen ? <Menu /> : null }
        </div>
    )
}

export default DropDownMenu