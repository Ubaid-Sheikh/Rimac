import React from "react";
import "./Contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.success("Message Sent", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  
};

const Contact = () => {
  return (
    <>
      <div className="Contact-container">
        <div className="text">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            corporis maiores ratione adipisci inventore deserunt quas, dicta
            consectetur voluptatibus hic porro omnis deleniti beatae non
            asperiores quam, animi facilis accusantium.
          </p>
          <div className="socials">
            <a href="https://wa.me/+923219509045" target="_blank" rel="noreferrer">Whatsapp</a>
            <a href="https://www.linkedin.com/in/ubaid018" target="_blank" rel="noreferrer">Linkedn</a>
            <a href="https://www.instagram.com/oyystupid?igsh=MTY3eXo4Nzh4YnI5Mw==" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="or">
          <p>OR</p>
        </div>
        <div className="form-div">
          <h1>Send a Message</h1>
          <form action="">
            <input type="email" name="" id="" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="5" placeholder="Enter Your Message"></textarea>
            <input type="button" value="Send" onClick={notify}/>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
