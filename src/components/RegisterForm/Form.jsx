import React, { useState } from 'react'
import { useContext } from 'react';
import { Button } from 'react-bootstrap'
import firebase from '../../firebase/firebase'
import { AuthContext } from '../../utils/Auth';

export const Form = ()=>{
    const { currentUser } = useContext(AuthContext);
    const [title, setTitle] = useState("")
    const handleOnChange = (e)=>{
        setTitle(e.target.value)
    }

    const createTodo = ()=>{
        const todoRef = firebase.database().ref('Todo');

        const todo = {
            title,
            complete: false,
            uid: currentUser.uid
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