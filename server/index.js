const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const customer_model = require("./models/customers");
const transaction_model = require("./models/transactions");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://abdelrahmanha:DHVFhsjvihluhdh@cluster0.v2q3q.mongodb.net/BasicBankSystem?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.get("/", (req, res) => {
  customer_model.find({}, (err, customers) => {
    if (err) {
      res.send(err);
    } else {
      res.json(customers);
    }
  });
});

app.post("/addTransaction", (req, res) => {
  const sender = req.body.sender;
  const receiver = req.body.receiver;
  const amount = req.body.amount;
  const transaction = new transaction_model({
    sender: sender,
    receiver: receiver,
    amount: amount,
  });
  transaction.save((err, transaction) => {
    if (err) {
      res.send(err);
    } else {
      res.send(transaction);
    }
  });
});

app.get("/readTransaction", (req, res) => {
  transaction_model.find({}, (err, transactions) => {
    if (err) {
      res.send(err);
    } else {
      res.send(transactions);
    }
  });
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
