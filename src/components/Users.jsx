import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/users/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => setUsers(result.data));
  }, []);

  return (
    <div>
      <p>Users List</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
