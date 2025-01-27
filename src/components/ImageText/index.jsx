import React from "react";
import BigBanner from "../BigBanner";
import "./style.scss";
import { HOME_DATA } from "../../constants/data";
import SmallText from "../SmallText";
import { CButton } from "@coreui/react";
import TextImage from "../TextImage";
import img1 from "../../assets/images/Maskgroup1.png";
import img2 from "../../assets/images/Maskgroup2.png";

const ImageText = () => {
  return (
    <div className="image_text_container">
      <div className="text">
        <BigBanner
          alignText={"left"}
          title={HOME_DATA.text2.title}
          banner={HOME_DATA.text2.banner}
        />
        <SmallText />
        <CButton className="main_btn">explore</CButton>
      </div>
      <TextImage imgUrl1={img1} imgUrl2={img2} />
    </div>
  );
};

export default ImageText;
