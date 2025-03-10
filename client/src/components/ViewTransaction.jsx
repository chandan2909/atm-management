import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import bg from "../assets/bg.jpg";
import Navbar from "./Navbar";

export default function ViewTransaction({ accno }) {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const link = "http://localhost:8001/api/transaction";

  useEffect(() => {
    fetch(`${link}/${accno}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setTransactions(data);
        } else {
          alert("No transactions found");
        }
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, [accno]);

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
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent background
          }}
        >
          <h1 className="text-3xl text-white mb-3">View your transactions</h1>
          <div className="text-white w-full overflow-y-auto" style={{ maxHeight: "50vh" }}>
            {transactions.map((transaction, index) => (
              <div key={index} className="mb-4 p-4 border-b border-gray-600">
                <p className="text-lg"><strong>Type:</strong> {transaction.transtype}</p>
                <p className="text-lg"><strong>Amount:</strong> {transaction.amt}</p>
                <p className="text-lg"><strong>Date:</strong> {transaction.date}</p>
                <p className="text-lg"><strong>Time:</strong> {transaction.time}</p>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
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

ViewTransaction.propTypes = {
  accno: PropTypes.string.isRequired,
};
