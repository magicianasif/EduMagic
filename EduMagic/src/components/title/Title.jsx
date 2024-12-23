import React from "react";
import "./Title.css";

function Title({ title, subTitle }) {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
