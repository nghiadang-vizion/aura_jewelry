import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import IconFind from "../../assets/logos/IconFind";
import { CButton } from "@coreui/react";
import IconBag from "../../assets/logos/IconBag";

const PageHeader = () => {
  return (
    <header>
      <nav className="nav_wrapper d-flex align-items-center justify-content-between px-5">
        <div className="header_logo">
          <img
            src="https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/472558985_992162706282615_3963512732402177592_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ChtPyWf3oJUQ7kNvgGzQ9lY&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=AQPzOCcDxQ7z6Y-CPcqjkh6&oh=00_AYCIOR5YOeVU-MgtXB5ss7-lldjPLlToQr4qOOWkRdMSXQ&oe=679C195E"
            alt="aura_logo"
          />
        </div>
        <ul className="d-flex p-0 m-0 align-items-center header_nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <CButton className="p-0">
              <IconFind height="15" width="15" />
            </CButton>
          </li>
          <li>
            <CButton className="p-0">
              <IconBag height="15" width="18" />
            </CButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
