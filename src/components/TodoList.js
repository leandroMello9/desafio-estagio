import React from "react";
import "./TodoList.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt,faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function TodoList(props) {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.todos);

  function removeTodo(id) {
    dispatch({
      type: "todos/REMOVE_TODO",
      payload: {
        id
      }
    });
  }

  return (
    <div className="list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <label htmlFor="">
              {todo.name ? `Name: ${todo.name} ||` : ``}{" "}
            </label>
            <label htmlFor="">
              {todo.description ? `Descrição ${todo.description}` : ``}
            </label>
            <button onClick={e => removeTodo(todo.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>

            <Link to={"/todos/" + todo.id + "/edit"} id={todo.id}>
              <button><FontAwesomeIcon icon={faPencilAlt}/></button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
