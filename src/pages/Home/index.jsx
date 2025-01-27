import React from "react";
import BigBanner from "../../components/BigBanner";
import "./style.scss";
import DivWrapper from "../../components/DivWrapper";
import ImageText from "../../components/ImageText";
import { HOME_DATA } from "../../constants/data";

const Home = () => {
  return (
    <div className="home_wrapper">
      <section className="pt-5">
        <div className="middle_banner d-flex justify-content-center align-items-center mb-5">
          <BigBanner
            alignText={"center"}
            title={HOME_DATA.text1.title}
            banner={HOME_DATA.text1.banner}
          />
        </div>
        <DivWrapper>
          <img
            style={{ objectFit: "contain" }}
            className="w-100 h-100"
            src="/assets/images/bigImg.png"
            alt="big_banner"
          />
        </DivWrapper>
      </section>
      <section className="pt-5">
        <ImageText />
        <DivWrapper>
          <img
            style={{ objectFit: "contain" }}
            className="w-100 h-100"
            src="/assets/images/bigImg.png"
            alt="big_banner"
          />
        </DivWrapper>
      </section>
    </div>
  );
};
export default Home;
