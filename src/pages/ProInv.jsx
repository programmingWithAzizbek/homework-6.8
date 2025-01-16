import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/ProInv.css";

function ProInv() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("elektronika");
  const [products, setProducts] = useState([]);

  function validate() {
    return true;
  }

  function handleSave(e) {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    }

    const product = {
      id: Date.now(),
      name,
      price,
      amount,
      type,
    };

    let copied = [...products];
    copied.push(product);
    setProducts(copied);
    setAmount(0);
    setPrice(0);
    setName("");
    setType("elektronika");
  }

  useEffect(() => {
    let counter = 0;
    products.forEach((product) => {
      counter += product.amount;
    });

    document.title = `Mahsulotlar soni: ${counter}`;
  }, [products]);

  function handleDelete(id) {
    let confirmDelete = confirm("O'chirmoqchimisiz?");
    if (confirmDelete) {
      let copied = [...products];
      copied = copied.filter((product) => {
        return product.id != id;
      });

      setProducts(copied);
    }
  }

  return (
    <div className="proinv">
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Name..."
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Enter Price..."
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Enter Amount..."
          required
        />
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option>elektronika</option>
          <option>kiyim</option>
          <option>ovqat</option>
        </select>
        <button onClick={handleSave}>Save</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nomi</th>
            <th>Narxi</th>
            <th>Miqdori</th>
            <th>Turi</th>
            <th>Amallar</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.amount}</td>
                  <td>{product.type}</td>
                  <td className="btns">
                    <button
                      onClick={() => {
                        handleDelete(product.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ProInv;
