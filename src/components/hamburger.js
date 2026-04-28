import React from "react";

export default function Hamburger({ isOpen }) {
  return (
    <div className="hamburger">
      <div className={`hamburgerIntermediate${isOpen ? " showX" : ""}`}>
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </div>
    </div>
  );
}
