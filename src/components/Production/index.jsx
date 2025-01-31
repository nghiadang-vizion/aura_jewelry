import React from "react";
import "./style.scss";
import { CButton } from "@coreui/react";

const Production = ({
  name,
  price,
  imgUrl,
  height = "250px",
  width = "300px",
  isShadow = false,
}) => {
  return (
    <div className="production d-flex align-items-center justify-content-center flex-column">
      <div
        className={`product_img ${isShadow ? "shadow_box" : ""}`}
        style={{ height: height, width: width }}
      >
        <img className="w-100 h-100" src={imgUrl} alt="product" />
      </div>
      <span className="title">{name}</span>
      <span className="price">{price}</span>
      <CButton className="main_btn">Add to cart</CButton>
    </div>
  );
};

export default Production;
