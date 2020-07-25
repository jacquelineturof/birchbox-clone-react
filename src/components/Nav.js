import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DropDownMenu from './UI/DropDownMenu'

import classes from './Nav.module.css'

const Top = ({ authUser }) => (
    <div className = { classes.Top }>
        <DropDownMenu label = { authUser } />
        <h1 className = { classes.AppName }>MYBIRCHBOX</h1>
    </div>
)

const MainLinks = () => (
    <div className = { classes.LinkContainer }>
        <NavLink to = "" className = { classes.NavLink }>
            Collections
        </NavLink>
        <NavLink to = "" className = { classes.NavLink }>
            Makeup
        </NavLink>
        <NavLink to = "" className = { classes.NavLink }>
            Hair
        </NavLink>
        <NavLink to = "" className = { classes.NavLink }>
            Skin
        </NavLink>
        <NavLink to = "" className = { classes.NavLink }>
            Sale
        </NavLink>
    </div>
)

const IconContainer = () => (
    <div className = { classes.IconContainer }>
        <FontAwesomeIcon
            icon = { [ 'fal', 'shopping-cart' ] } 
            className = { classes.Icon } />
        <FontAwesomeIcon
            icon = { [ 'fal', 'search' ] } 
            className = { classes.Icon } />
    </div>
)

const Bottom = () => (
    <div className = { classes.Bottom }>
        <MainLinks />
        <IconContainer />
    </div>
)

const Nav = () => {
    const authUser = 'Jacqueline'

    return (
        <nav className = { classes.Nav }>
            <Top authUser = { authUser } />
            <Bottom />
        </nav>
    )
}

export default Nav