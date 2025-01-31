import React, { useRef } from "react";
import "./style.scss";
import goldImg from "../../assets/images/gold.png";
console.log("🚀 ~ goldImg:", goldImg);

const goldPos = [
  {
    top: "100%",
    left: "10vw",
    isRotate: true,
  },
  {
    top: "-10px",
    left: "90vw",
    isRotate: false,
  },
];

const DivWrapper = ({ children = <></> }) => {
  const divRef = useRef();
  return (
    <div
      className={`div_wrapper position-relative w-100`}
      id="container_div"
      ref={divRef}
    >
      {goldPos.map((item, index) => (
        <img
          key={index}
          src={goldImg}
          alt="gold"
          className={`gold_png ${item.isRotate ? "_rotate" : ""}`}
          style={{
            top: `${item.top}`,
            left: `${item.left}`,
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default DivWrapper;
