import React from "react";
import logo from "../imgs/logo.svg";
import phoneIcn from "../imgs/phone_icn.svg";
import mobileOpenIcn from "../imgs/mobile_menu_open_icn.svg";

const Header = ({ setIsMobileOpen }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="phones">
        {phones.map((p, i) => {
          return (
            <a href={`tel:${p}`} key={`phone-to-${i}`}>
              <img src={phoneIcn} alt="phone" />
              <span>{p}</span>
            </a>
          );
        })}
      </div>
      <div className="mobile-menu-open" onClick={() => setIsMobileOpen(true)}>
        <img src={mobileOpenIcn} alt="mobileMenuOpen" />
      </div>
    </div>
  );
};

export default Header;

export const phones = [
  "(97) 446 40 10",
  "(99) 420 00 10",
  "(90) 959 19 99",
  "(90) 919 30 71",
];
