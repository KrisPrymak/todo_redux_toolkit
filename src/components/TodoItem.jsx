import React from "react";
import { useDispatch } from "react-redux";
import style from "./Todo.module.css";
import { removeTodo, toggleTodoComplete } from "./../store/todoSlice";

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.list__item} key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(toggleTodoComplete({ id }));
        }}
      />

      <span>{text}</span>

      <button
        className={style.removeButton}
        onClick={() => {
          dispatch(removeTodo({ id }));
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
