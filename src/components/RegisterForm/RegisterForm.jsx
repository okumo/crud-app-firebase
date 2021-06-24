import React from "react";
import { useEffect, useState } from "react";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../firebase/firebase";
import { Form } from "./Form";
import firebase from "../../firebase/firebase";
import { TodoList } from "../TodoList";
const RegisterForm = () => {
  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const list = [];
      for (const id in todos) {
        list.push({ id, ...todos[id] });
      }
      setTodoList(list);
    });
  }, []);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form />
      <TodoList todoList={todoList} />
    </div>
  );
};
export default RegisterForm;
