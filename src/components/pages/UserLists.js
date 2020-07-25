import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Modal from '../UI/Modal'
import Backdrop from '../UI/Backdrop'
import CreateListForm from '../CreateListForm'

import classes from './UserLists.module.css'

const Header = ({ numLists }) => (
    <header className = { classes.Header }>
        <h1>Your Lists</h1>
        <p className = { classes.NumListLabel }>You have {numLists} lists</p>
    </header>
)

const UserList = ({ name, collectionSize, clicked }) => (
    <div className = { classes.UserList } onClick = { clicked }>
        <h4>{ name }</h4>
        <p>{ collectionSize } Products</p>
    </div>
)

const UserLists = () => {
    const userLists = useSelector(state => state.lists.lists)
    const listsToDisplay = []

    // Modal control, when user clicks Create New List
    // modal should be shown containing new list form
    // backdrop should also be displayed
    const [ isCreateMode, setIsCreateMode ] = useState(false)

    const modal = (
        <Modal>
            <CreateListForm />
        </Modal>
    )
    
    for (let list in userLists) {
        listsToDisplay.push(
            <UserList 
                name = { list.charAt(0).toUpperCase() + list.substring(1) } 
                collectionSize = { userLists[list].length } />)
    }

    // Add one more list, which will hold our add new list functionality
    listsToDisplay.push(
        <UserList 
            name = "Create New List" 
            collectionSize = { 0 }
            clicked = { () => setIsCreateMode(true) } />)

    return (
        <section className = { classes.Container }>
            <Backdrop 
                show = { isCreateMode } 
                clicked = { () => setIsCreateMode(false) } />
            { isCreateMode ? modal : null }
            <Header numLists = { 3 } />
            <div className = { classes.ListContainer }>
                { listsToDisplay }
            </div>
        </section>
    )
}

export default UserLists