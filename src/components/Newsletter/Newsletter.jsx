import React from "react";
import "./Newsletter.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  toast.success("Subscribed!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const Newsletter = () => {
  return (
    <div className="Newsletter-container">
      <h1>Newsletter</h1>
      <p>Stay up to date with the latest news from the world of Rimac</p>
      <button id="Subscribe-btn" onClick={Notification}>
        Subscribe
      </button>
      <ToastContainer />
    </div>
  );
};

export default Newsletter;
