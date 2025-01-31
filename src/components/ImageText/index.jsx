import { CButton } from "@coreui/react";
import React from "react";
import BigBanner from "../BigBanner";
import SmallText from "../SmallText";
import TextImage from "../TextImage";
import "./style.scss";

const ImageText = ({
  img1,
  img2,
  title,
  banner,
  isReverse = false,
  left,
  bottom,
}) => {
  return (
    <div
      className="image_text_container"
      style={{ flexDirection: `${isReverse ? "row-reverse" : "row"}` }}
    >
      <div className="text">
        <BigBanner alignText={"left"} title={title} banner={banner} />
        <SmallText />
        <CButton className="main_btn">explore</CButton>
      </div>
      <TextImage imgUrl1={img1} imgUrl2={img2} left={left} bottom={bottom} />
    </div>
  );
};

export default ImageText;
