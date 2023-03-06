import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, edit, complete } from "./store/todoSlice";

const Todo = (props) => {
  const dispatch = useDispatch();

  const data = props.data.obj;
  const id = props.id;

  return (
    <div className="todo">
      <div>
        <h2 className={data.completed ? "complete" : ""}>{data.content}</h2>
      </div>

      <div className="buttons">
        {/* edit dispatch */}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(edit(id));
          }}
        >
          edit
        </button>

        {/* delete dispatch */}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteTodo(id));
          }}
        >
          delete
        </button>

        {/* complete dispatch */}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(complete({ id, complete: data.completed }));
          }}
        >
          complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
