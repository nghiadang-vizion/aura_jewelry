import React, { useRef } from "react";
import "./style.scss";
import goldImg from "../../assets/images/gold.png";
console.log("🚀 ~ goldImg:", goldImg);

const goldPos = [
  {
    top: "100%",
    left: "10vw",
  },
  {
    top: "-10px",
    left: "90vw",
  },
];

const DivWrapper = ({ children = <></> }) => {
  const divRef = useRef();
  return (
    <div
      className="div_wrapper position-relative w-100"
      id="container_div"
      ref={divRef}
    >
      {goldPos.map((item) => (
        <img
          src={goldImg}
          alt="gold"
          style={{
            position: "absolute",
            top: `${item.top}`,
            left: `${item.left}`,
            height: "500px",
            width: "500px",
            transform: "translate(-50%, -50%)",
            objectFit: "contain",
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default DivWrapper;
