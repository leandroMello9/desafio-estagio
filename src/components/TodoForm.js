import React from "react";
import "./TodoForm.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TodoForm(props) {
  const dispatch = useDispatch();

  const lastId = useSelector(state => state.todos.lastId);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = function(event) {
    event.preventDefault();

    dispatch({
      type: "todos/SET_TODO",
      payload: { name, description, id: lastId }
    });
    dispatch({
      type: "todos/SET_LAST_ID",
      payload: {}
    });

    setName("");
    setDescription("");
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <h1>
        Todo{" "}<i><FontAwesomeIcon icon={faCalendar}/></i>
        
      </h1>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        value={description}
        type="text"
        onChange={event => setDescription(event.target.value)}
      />
      <br />
      <button type="submit">Register new Todo</button>
    </form>
  );
}
