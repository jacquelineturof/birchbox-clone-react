import React, { useState } from 'react'

import Input from './UI/Input'

import classes from './CreateListForm.module.css'

const CreateListForm = () => {
    const [ inputValue, setInputValue ] = useState('')
    const [ isInputValid, setIsInputValid ] = useState(true)
    const [ isInputTouched, setIsInputTouched ] = useState(false)

    const inputChangeHandler = newValue => {
        setIsInputTouched(true)
        setInputValue(newValue)
    }

    const INPUT_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Name of New List'
        },
        value: inputValue,
        changed: e => inputChangeHandler(e.target.value),
        touched: isInputTouched,
        valid: isInputValid,
        warningMessage: 'Must be between 4 - 20 characters.'
    }

    return (
        <form className = { classes.Form }>
            <header className = { classes.FormHeader }>
                <h3 className = { classes.Heading }>Create New List</h3>
            </header>
            <div className = { classes.FormControl }>
                <Input { ...INPUT_CONFIG }/>
            </div>
            
        </form>
    )
}

export default CreateListForm