import React, { useState } from "react";
import { Button } from "@mui/material";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { Name: name, Email: email, Password: password };
    setAllEntry([...allEntry, newEntry]);
    setName(""); 
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </form>
      <div>
        {allEntry.map((currentElement, index) => (
          <div key={index}>
            <p>Name: {currentElement.Name}</p>
            <p>Email: {currentElement.Email}</p>
            <p>Password: {currentElement.Password}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forms;
