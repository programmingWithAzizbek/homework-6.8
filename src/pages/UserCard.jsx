import React, { useState } from "react";
import "../assets/css/UserCard.css";
import { NavLink } from "react-router-dom";

function UserCard() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");

  function handleSave(event) {
    event.preventDefault();

    if (!firstName) {
      alert("Enter Your First Name");
      return;
    }

    if (!lastName) {
      alert("Enter Your Last Name");
      return;
    }

    if (!email) {
      alert("Enter Your Email");
      return;
    }

    if (!age || age <= 0) {
      alert("Enter a valid Age");
      return;
    }

    if (!image) {
      alert("Enter an Image");
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      age,
      image,
    };

    setData([...data, user]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setImage("");
  }

  return (
    <div className="usercard">
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
          placeholder="Enter Your First Name..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Your Last Name..."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Your Age..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Your Image URL..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button onClick={handleSave}>Save</button>
      </form>

      <div>
        {data.length > 0 &&
          data.map((value, index) => (
            <div className="managecard" key={index}>
              <img src={value.image} alt="User Image" />
              <strong>
                First Name: <span>{value.firstName}</span>
              </strong>
              <strong>
                Last Name: <span>{value.lastName}</span>
              </strong>
              <strong>
                Email: <span>{value.email}</span>
              </strong>
              <strong>{value.age}</strong>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserCard;
