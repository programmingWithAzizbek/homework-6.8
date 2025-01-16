import React from "react";
import "../assets/css/Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
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
    </div>
  );
}

export default Home;
