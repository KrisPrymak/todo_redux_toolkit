import React from "react";
import { useSelector } from "react-redux";
import style from "./Todo.module.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <ul className={style.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
        />
      ))}
    </ul>
  );
};

export default TodoList;
