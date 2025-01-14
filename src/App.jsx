import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import UserCard from "./pages/UserCard";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/todolist" element={<TodoList />}></Route>
        <Route path="/usercard" element={<UserCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
