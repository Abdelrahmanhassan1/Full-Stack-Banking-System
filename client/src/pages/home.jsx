import React from "react";
import "../App.css";
import "../home.css";
import pic from "../background home.jpg";

function Home() {
  const customerRoute = () => {
    window.location.href = "/customer";
  };
  const transactionRoute = () => {
    window.location.href = "/transaction";
  };

  return (
    <div className="homePage">
      <div className="left">
        <h1>Welcome to Banky!</h1>
        <p> Offering you an awesome service.</p>
        <p> Your data is secured.</p>
        <div>
          <button className="pagesButton" onClick={customerRoute}>
            Customer
          </button>
          <button className="pagesButton" onClick={transactionRoute}>
            Transaction
          </button>
        </div>
      </div>
      <div className="right">
        <img src={pic} alt="background" />
      </div>
    </div>
  );
}
export default Home;
