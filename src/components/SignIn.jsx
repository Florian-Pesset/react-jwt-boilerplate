import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    if (!email || !password) {
      alert("Please specify both email and password");
    } else {
      axios
        .post(`${REACT_APP_SERVER_ADDRESS}/register/`, {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="test@blabla.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
