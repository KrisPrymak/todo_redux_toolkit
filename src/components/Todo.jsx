import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import style from "./Todo.module.css";
import TodoList from "./TodoList";
import { addNewTodo, fetchTodos } from './../store/todoSlice';

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.todos)

  const addTask = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className={style.container}>
      <Form text={text} handleSubmit={addTask} handleChange={setText} />
      <TodoList />
      {status === 'pending' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
    </div>
  );
};

export default Todo;
