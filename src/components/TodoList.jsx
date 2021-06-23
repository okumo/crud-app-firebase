import React from 'react'
import {ListGroup} from 'react-bootstrap'
import {Todo} from './Todo'

export const TodoList = ({todoList})=>{
    return(
        <>
        <ListGroup>
        {todoList.map((todo, index)=>{
            return <Todo todo={todo} key={index}/>
        })}
        </ListGroup>

        </>
    )
}