import React from "react";
import { HOME_DATA } from "../../constants/data";

const SmallText = ({ text = HOME_DATA.text2.passage }) => {
  return <p className="passage_text">{text}</p>;
};

export default SmallText;
