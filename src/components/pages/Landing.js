import React from 'react'
import { NavLink } from 'react-router-dom'

import MakeUpImage from '../../Assets/makeup1.png'

import BestSellers from '../BestSellers'
import Ideas from '../IdeasRow'
import Footer from '../UI/Footer'

import classes from './Landing.module.css'

const Banner = () => (
    <div className = { classes.Banner }>
        <div className = { classes.HeaderContainer }>
            <header className = { classes.BannerHeader }>
                <h1 className = { classes.Heading }>Find your new favorite product!</h1>
                <NavLink to = "/" className = { classes.BannerLink }>
                    Search Favorites
                </NavLink>
            </header>
        </div>
        <div className = { classes.ImageContainer }>
            <img src = { MakeUpImage } className = { classes.BannerImage } alt = "makeup" />
        </div>
    </div>
)

const Landing = () => (
    <section className = { classes.Container }>
        <Banner />
        <BestSellers />
        <Ideas />
        <Footer />
    </section>
)

export default Landing