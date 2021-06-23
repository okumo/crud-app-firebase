import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import firebase from '../../firebase/firebase'

export const Form = ()=>{
    const [title, setTitle] = useState("")

    const handleOnChange = (e)=>{
        setTitle(e.target.value)
    }

    const createTodo = ()=>{
        const todoRef = firebase.database().ref('Todo');

        const todo = {
            title,
            complete: false
        }

        todoRef.push(todo)
    }

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title}/>
            {"  "}
            <Button variant="primary" onClick={createTodo}>Add Todo</Button>
        </div>
    )
}