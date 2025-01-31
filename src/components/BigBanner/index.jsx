import React from "react";
import "./style.scss";

const BigBanner = ({ alignText, title, banner }) => {
  return (
    <div
      className={`big_banner_container d-flex flex-column align-items-${alignText}`}
      style={{ textAlign: alignText }}
    >
      <p className="title p-1 m-0">{title}</p>
      <h1 className="banner">{banner}</h1>
    </div>
  );
};

export default BigBanner;
