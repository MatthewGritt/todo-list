import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/todoSlice";
import "./App.css";
import Todo from "./Todo";

const App = () => {
  const todoData = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // value of input
  const [value, setValue] = useState("");
  // count is used to go through todoArray
  let count = 0;

  let todoArray = [];

  // getting the number keys;
  const ids = Object.keys(todoData.data);

  // pushing todoData objects into todoArray
  // also adding a id
  Array(todoData.data).forEach((obj) => {
    for (let item in obj) {
      todoArray.push({ obj: obj[item], id: ids[count] });
      count++;
    }
  });

  return (
    <form className="app">
      <div className="top">
        <h1>TODO LIST</h1>
        <div className="input-container">
          <input
            required
            placeholder="Enter Todo..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
          />

          {/* add dispatch */}
          <button
            onClick={(e) => {
              e.preventDefault();
              if (value !== "") {
                dispatch(
                  add({
                    nextId: todoData.nextId + 1,
                    obj: {
                      content: value,
                      completed: false,
                    },
                  }),
                );
              }
              setValue("");
            }}
          >
            add
          </button>
        </div>
      </div>

      {/* passing props into Todo */}
      {todoArray.map((obj) => (
        <Todo key={obj.id} id={obj.id} data={obj} />
      ))}
    </form>
  );
};
export default App;
