import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Home() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div className="Users">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Customer ID</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.customerId}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
