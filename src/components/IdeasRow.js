import React from 'react'

import classes from './IdeasRow.module.css'

const IDEAS = [
    { title: 'Why SPF Really Matters', imageSrc: 'spf.jpg' },
    { title: 'Choosing a Skincare Product', imageSrc: 'skincare.jpg' },
    { title: "Why I'm Never Cutting My Hair", imageSrc: 'hair.jpg' },
    { title: "Guide to the best foundation", imageSrc: 'foundation.jpg' }
]

const Idea = ({ imageSrc, title }) => (
    <div className = { classes.Idea }>
        <img 
            src = { require("../Assets/" + imageSrc) } 
            className = { classes.Image } 
            alt = "idea" />
        <h5 className = { classes.Title }>{ title }</h5>
    </div>
)

const IdeasRow = () => (
    <div className = { classes.Container }>
        <h3>Ideas</h3>
        <div className = { classes.Row }>
            {
                IDEAS.map(idea => <Idea key = { idea.title } { ...idea }/>)
            }
        </div>
     </div>
)

export default IdeasRow