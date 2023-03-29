import React, { useState, useContext } from "react";
import { CustomerContext } from "../contexts/customer";

const CustomerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { submit } = useContext(CustomerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dados component", { name, email });
    submit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CustomerForm;
