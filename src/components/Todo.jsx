import React from 'react'
import {ListGroup} from 'react-bootstrap'
import firebase from '../firebase/firebase'
import '../App.css'
import { Button } from 'react-bootstrap'

export const Todo = ({todo})=>{
    const deleteTodo = ()=>{
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove()
    }

    const completeTodo = ()=>{
        const todoRef = firebase.database().ref('Todo').child(todo.id)
        todoRef.update({
            complete: !todo.complete
        })
    }
    return(
        <ListGroup.Item>
            <h1  className={todo.complete===true ? "complete" : ""}>{todo.title}</h1>
            <Button  variant="danger" onClick={deleteTodo}>Delete</Button>
            {" "}
            <Button  variant="success" onClick={completeTodo}>Complete</Button>
            </ListGroup.Item>
    )
}