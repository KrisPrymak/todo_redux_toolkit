import React from "react";
import { useDispatch } from "react-redux";
import style from "./Todo.module.css";
import { deleteTodo, toggleTodo } from "./../store/todoSlice";

const TodoItem = ({ id, completed, title }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.list__item} key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(toggleTodo(id));
        }}
      />

      <span>{title}</span>

      <button
        className={style.removeButton}
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
