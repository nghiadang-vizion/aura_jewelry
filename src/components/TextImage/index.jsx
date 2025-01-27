import React from "react";
import "./style.scss";

const TextImage = ({ imgUrl1 = "", imgUrl2 = "" }) => {
  return (
    <div className="position-relative text_img">
      <img className="vertical_img h-100 w-100" src={imgUrl1} alt="text_img" />
      <img
        className="horizontal_img h-100 w-100"
        src={imgUrl2}
        alt="text_img"
      />
    </div>
  );
};

export default TextImage;
