import React from 'react';
import style from './Todo.module.css';

const Form = ({text, handleChange, handleSubmit}) => {
    return (
        <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <button className={style.button}>
          add
        </button>
      </form>
    );
};

export default Form;