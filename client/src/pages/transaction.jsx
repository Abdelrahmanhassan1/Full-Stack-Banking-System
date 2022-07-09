import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import TransactionCard from "../components/transactionCard";

function Transaction() {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [listOfTransactions, setListOfTransactions] = useState([]);

  function addTransaction() {
    if (sender === "" || receiver === "" || amount === "") {
      alert("Please fill in all fields");
    } else {
      Axios.post("http://localhost:3001/addTransaction", {
        sender: sender,
        receiver: receiver,
        amount: amount,
      });
      window.location.reload(false);
    }
  }
  useEffect(() => {
    Axios.get("http://localhost:3001/readTransaction").then((response) => {
      setListOfTransactions(response.data);
    });
  }, []);

  return (
    <div>
      <div className="transactionForm">
        <label>From</label>
        <input
          type="text"
          name="sender"
          onChange={(event) => {
            setSender(event.target.value);
          }}
        />
        <label>To</label>
        <input
          type="text"
          name="receiver"
          onChange={(event) => {
            setReceiver(event.target.value);
          }}
        />
        <label>Amount</label>
        <input
          type="text"
          name="amount"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <button onClick={addTransaction}>Send</button>
      </div>

      <div className="transactionList">
        <table>
          <thead>
            <tr>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
            </tr>
          </thead>
          <TransactionCard listOfTransactions={listOfTransactions} />
        </table>
      </div>
    </div>
  );
}
export default Transaction;
