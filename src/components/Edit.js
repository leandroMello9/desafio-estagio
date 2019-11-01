import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import { useParams, useHistory } from "react-router-dom";
import './Edit.css'

export default function Edit() {
  const history = useHistory();
  const dispatch = useDispatch();
  let { id } = useParams();
  id = parseInt(id);

  const todos = useSelector(state => state.todos.todos);

  // Pega o todo que quero editar
  const index = todos.findIndex(todo => todo.id === id);

  const [name, setName] = useState(todos[index].name);
  const [description, setDescription] = useState(todos[index].description);

  const onSubmit = event => {
    event.preventDefault();

    dispatch({
      type: "todos/EDIT_TODO",
      payload: {
        id,
        name,
        description
      }
    });

    history.goBack();
    setName("");
    setDescription("");
  };

  return (
    <div className='edit'>
      <form onSubmit={onSubmit}>
       <h1>
        Todo{" "}<i><FontAwesomeIcon icon={faCalendar}/></i>
        
      </h1>
        <label htmlFor="name">New Name</label>
        <input
          type="text"
          name=""
          value={name}
          id="name"
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="description">New Description</label>
        <input
          type="text"
          name=""
          value={description}
          id="description"
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
