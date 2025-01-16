import React, { useState } from "react";
import "../assets/css/TodoList.css";
import { NavLink } from "react-router-dom";

function TodoList() {
  let [data, setData] = useState([]);
  let [task, setTask] = useState("");
  let [category, setCategory] = useState("");
  let [filter, setFilter] = useState("");

  function handleSave(event) {
    event.preventDefault();

    if (task.length < 1) {
      alert("Enter Task!");
      return;
    }

    if (category.length < 2) {
      alert("You must select a category!");
      return;
    }

    let user = {
      task: task,
      category: category,
    };

    const copied = [...data];
    copied.push(user);
    setData(copied);
    setTask("");
    setCategory("");
  }

  function handleSelect(event) {
    setCategory(event.target.value);
  }

  function filterTasks(event) {
    setFilter(event.target.value);
  }

  const filterData = filter
    ? data.filter((task) => task.category == filter)
    : data;

  return (
    <div className="todolist">
      <header>
        <div>
          <NavLink to={"/"}>Home</NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to={"/todolist"}>TodoList</NavLink>
              </li>
              <li>
                <NavLink to={"/usercard"}>UserCard</NavLink>
              </li>
              <li>
                <NavLink to={"/proinv"}>ProInv</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <form>
        <input
          type="text"
          placeholder="Enter Your Task..."
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <select onChange={handleSelect} value={category}>
          <option value="">Select Category</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="personal">Personal</option>
        </select>
        <button onClick={handleSave}>Save</button>
      </form>

      <div className="filtercategory">
        <select onChange={filterTasks} value={filter}>
          <option value="">Select Category</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="personal">Personal</option>
        </select>
      </div>

      <div>
        {filterData.length > 0 &&
          filterData.map((value, index) => {
            return (
              <div key={index} className="taskcard">
                <strong>Task:</strong>
                {value.task}
                <strong>Category:</strong>
                {value.category}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TodoList;
