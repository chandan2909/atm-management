import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import bg from "../assets/bg.jpg";
import Navbar from "./Navbar";

export default function Withdraw({ accno }) {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const link = "http://localhost:8001/api/selectuser";

  useEffect(() => {
    fetch(`${link}/${accno}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setBalance(data[0].balance);
          console.log(data[0].balance);
        } else {
          console.log("Account not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching PIN:", error);
      });
  }, [accno]);

  const handlewithdrawvalidate = (event) => {
    event.preventDefault();

    const bal = Number(balance);
    const amt = Number(amount);

    console.log(bal);
    console.log(amt);
    if (amt <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (amt > bal) {
      alert("Insufficient balance. Please enter a smaller amount");
      return;
    }

    if (amt > 100000) {
      alert("You can't withdraw more than 100000 at a time");
      return;
    }

    if (amt % 1 !== 0) {
      alert("Please enter a valid amount (no decimals)");
      return;
    }
    if (amt % 10 !== 0) {
      alert("Enter a round figure value");
      return;
    }

    handleWithdraw(event);
  };

  const handleWithdraw = (event) => {
    event.preventDefault();
    const amt = Number(amount);

    fetch(`http://localhost:8001/api/withdraw/${accno}`, {
      method: 'POST',
      body: JSON.stringify({ amt }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('Withdrawal error:', data.error);
          alert('Withdrawal failed: ' + data.error);
        } else {
          console.log('Withdrawal completed successfully');
        }
      })
      .catch((error) => {
        console.error('Error fetching PIN:', error);
      });
    alert('Withdrawal completed successfully');
    navigate('/');
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ background: "#1a1a1a" }}
    >
      <Navbar />
      <div
        className="flex flex-col items-center justify-center"
        style={{
          background: `url(${bg})`,
          width: "80vw",
          height: "80vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <div
          className="flex flex-col items-center justify-between"
          style={{
            borderRadius: "15px",
            boxShadow: "0px 0px 20px 3px rgb(136 136 136 / 29%)",
            border: "2px dotted #6a5acd", // Change border color to shady blue
            padding: "20px",
          }}
        >
          <h1 className="text-4xl text-white mb-3 font-bold ">
            Welcome to Withdrawal Screen
          </h1>
          <h2 className="text-2xl mb-5" style={{ color: "#6a5acd" }}>
            Enter the Amount
          </h2>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            placeholder="Enter the amount"
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              className="text-lg font-bold"
              style={{
                color: "#fff",
                backgroundColor: "#6a5acd", // Shady blue color
                border: "2px solid #6a5acd",
                borderRadius: "25px",
                padding: "10px 20px", // Add padding for consistency
                margin: "0", // Remove any margin
              }}
              onClick={handlewithdrawvalidate}
            >
              Submit
            </button>
            <button
              className="text-lg font-bold"
              style={{
                color: "#6a5acd", // Shady blue color
                border: "2px solid #6a5acd",
                borderRadius: "25px",
                backgroundColor: "transparent", // Ensure background is transparent
                padding: "10px 20px", // Add padding for consistency
                margin: "0", // Remove any margin
              }}
              onClick={handleHome}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Withdraw.propTypes = {
  accno: PropTypes.string.isRequired,
};

