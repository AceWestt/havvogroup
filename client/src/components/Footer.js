import React from "react";
import mailIcn from "../imgs/mail_icn.svg";

const Footer = () => {
  return (
    <div className="footer">
      {mails.map((m, i) => {
        return (
          <a href={`mailto:${m}`} key={`mail-to-${i}`}>
            <img src={mailIcn} alt="mailicn" />
            <span>{m}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Footer;

const mails = [
  "makhmud.parpiev@havvogroup.uz",
  "ziyodilla.kholmirzaev@havvogroup.uz",
  "timur.rakhmatullaev@havvogroup.uz",
];
