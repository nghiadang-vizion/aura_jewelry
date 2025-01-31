import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import IconFind from "../../assets/logos/IconFind";
import { CButton } from "@coreui/react";
import IconBag from "../../assets/logos/IconBag";
import logo from "./aura_logo.png";

const PageHeader = () => {
  const headerRef = useRef(null);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true); // Kiểm tra có đang ở đầu trang không

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowHeader(true);
        setIsTop(true); // Ở đầu trang -> không có background
      } else {
        setIsTop(false); // Cuộn xuống -> có background
        if (currentScrollY > lastScrollY) {
          setShowHeader(false); // Ẩn header khi cuộn xuống
        } else {
          setShowHeader(true); // Hiện header khi cuộn lên
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <nav
        ref={headerRef}
        className="nav_wrapper d-flex align-items-center justify-content-between px-5"
        style={{
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
          backgroundColor: isTop ? "transparent" : "white",
          boxShadow: isTop ? "none" : "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="header_logo">
          <img src={logo} alt="aura_logo" />
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
