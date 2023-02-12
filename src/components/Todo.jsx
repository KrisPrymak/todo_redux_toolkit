import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";
import style from "./Todo.module.css";
import TodoList from "./TodoList";
import { addTodo } from './../store/todoSlice';

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div className={style.container}>
      <Form text={text} handleSubmit={addTask} handleChange={setText} />
      <TodoList />
    </div>
  );
};

export default Todo;
