import React from "react";
import BigBanner from "../../components/BigBanner";
import "./style.scss";
import DivWrapper from "../../components/DivWrapper";
import ImageText from "../../components/ImageText";
import { HOME_DATA, PRODUCTS } from "../../constants/data";
import Production from "../../components/Production";
import SliderComponent from "../../components/Slider";

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
        <ImageText
          img1={HOME_DATA.text2.img1}
          img2={HOME_DATA.text2.img2}
          title={HOME_DATA.text2.title}
          banner={HOME_DATA.text2.banner}
        />
      </section>
      <section className="pt-5">
        <DivWrapper>
          <BigBanner
            alignText={"center"}
            title={HOME_DATA.text3.title}
            banner={HOME_DATA.text3.banner}
          />
          <div className="d-flex justify-content-around pb-5">
            {PRODUCTS.map((item, index) => (
              <Production
                key={index}
                name={item.name}
                price={item.price}
                imgUrl={item.imgUrl}
              />
            ))}
          </div>
        </DivWrapper>
      </section>
      <section className="pt-5">
        <ImageText
          img1={HOME_DATA.text4.img1}
          img2={HOME_DATA.text4.img2}
          title={HOME_DATA.text4.title}
          banner={HOME_DATA.text4.banner}
          isReverse={true}
          left={"20px"}
          bottom={"210px"}
        />
      </section>
      <section className="pt-5">
        <DivWrapper>
          <img
            style={{ objectFit: "contain" }}
            className="w-100 h-100"
            src="/assets/images/Maskgroup5.png"
            alt="big_banner"
          />
        </DivWrapper>
      </section>
      <section className="pt-5">
        <div className="session_padding">
          <BigBanner
            alignText={"left"}
            title={HOME_DATA.text5.title}
            banner={HOME_DATA.text5.banner}
          />
        </div>
        <SliderComponent />
      </section>
    </div>
  );
};
export default Home;
