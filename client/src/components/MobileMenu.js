import React from "react";
import mobileBg from "../imgs/mobilebg.jpg";
import logo from "../imgs/logo.svg";
import closeBtn from "../imgs/mobile_menu_close.svg";
import phoneIcn from "../imgs/phone_icn.svg";
import mailIcn from "../imgs/mail_icn.svg";
import { phones } from "./Header";
import { mails } from "./Footer";

const MobileMenu = ({ setIsMobileOpen }) => {
  return (
    <div className="mobile-menu">
      <img src={mobileBg} alt="bg" className="bg-img" />
      <div className="cover" />
      <div className="top">
        <img src={logo} alt="logo" className="logo-img" />
        <img
          src={closeBtn}
          alt="closeMenu"
          className="close-btn-img"
          onClick={() => setIsMobileOpen(false)}
        />
      </div>
      <div className="bottom">
        <div className="title">В партнёрстве с природой!</div>
        <div className="contacts phones">
          <div className="label">Контактные номера:</div>
          <div className="list">
            {phones.map((p, i) => {
              return (
                <a href={`tel:${p}`} key={`mobile-phone-link-${i}`}>
                  <img src={phoneIcn} alt="phone" />
                  <span>{p}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="contacts mails">
          <div className="label">Почта:</div>
          <div className="list">
            {mails.map((p, i) => {
              return (
                <a href={`mailto:${p}`} key={`mobile-mail-link-${i}`}>
                  <img src={mailIcn} alt="mail" />
                  <span>{p}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
