const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const customer_model = require("./models/customers");
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

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
