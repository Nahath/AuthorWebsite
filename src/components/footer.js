import Image from "next/image";
import Link from "next/link";
import facebookIcon from "../../public/images/facebookIcon.png";
import React, { useState } from "react";
const validator = require("email-validator");

export default function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (validator.validate(inputValue)) {
      setIsValid(true);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputValue }),
      });
      if (response.ok) {
        setSubmitted(true);
        setInputValue("");
      }
    } else {
      setIsValid(false);
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="footer">
      {!submitted && (
        <div>
          <p>
            Sign Up for my Newsletter <br />
            <span style={{ fontSize: 14 }}>
              (Don't worry. I won't email very often).
            </span>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              // placeholder="Enter text"
            />
            <button type="submit">Subscribe</button>
          </form>
          {!isValid && <div className="errorMessage">Invalid Email</div>}
        </div>
      )}
      {submitted && (
        <div>
          <p>Thank You!</p>
        </div>
      )}

      <div className="socialMedia">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=61555529261761"
        >
          <Image alt="My Facebook Page" src={facebookIcon} />
        </a>
      </div>
      <div className="affiliateDisclosure">
        Most of the links that point you toward buying something on my site are
        affiliate links. That means that if you click and buy, I get some lucre
        (at no cost to you).
      </div>
    </div>
  );
}
