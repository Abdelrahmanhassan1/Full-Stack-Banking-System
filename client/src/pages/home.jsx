import React from "react";
import Button from "@mui/material/Button";

function Home() {
  const customerRoute = () => {
    window.location.href = "/customer";
  };
  const transactionRoute = () => {
    window.location.href = "/transaction";
  };

  return (
    <div>
      <h1>Welcome to Banky!</h1>
      <p>We offer you an awesome service, and your data is secured.</p>
      <Button onClick={customerRoute}>Customer</Button>
      <Button onClick={transactionRoute}>Transaction</Button>
    </div>
  );
}
export default Home;
