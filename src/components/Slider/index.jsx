import React from "react";
import Slider from "react-slick";
import { PRODUCTS_SLIDE } from "../../constants/data";
import Production from "../Production";
import "./style.scss";

const arrow_style = {
  right: "2px",
  opacity: 1,
  zIndex: 1000,
  height: "30px",
  width: "30px",
  border: "2px solid rgba(0,0,0,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
};
const SliderComponent = () => {
  const NextArrow = (props) => {
    console.log("🚀 ~ NextArrow ~ props:", props);
    const { className, style, onClick } = props;
    console.log("🚀 ~ NextArrow ~ style:", style);
    return (
      <div
        className={className}
        style={{
          ...style,
          ...arrow_style,
          right: "60px",
        }}
        onClick={onClick}
      />
    );
  };
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          ...arrow_style,
          left: "60px",
        }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container p-5">
      <Slider {...settings}>
        {PRODUCTS_SLIDE.map((item, index) => (
          <Production
            key={index}
            name={item.name}
            price={item.price}
            imgUrl={item.imgUrl}
            height="400px"
            width="325px"
            isShadow={true}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
