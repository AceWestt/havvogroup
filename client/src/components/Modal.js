import React from "react";
import closeBtn from "../imgs/modal_close_icn.svg";
import pdfIcn from "../imgs/pdf_icn.svg";
import havvoagrofoodPdf from "../imgs/havvoagrofood.pdf";
import havvogroupPdf from "../imgs/havvogroup.pdf";
import havvotrustPdf from "../imgs/havvotrust.pdf";
import havvonoblePdf from "../imgs/havvonoble.pdf";

const Modal = ({ setIsModalOpen }) => {
  return (
    <div className="modal speacial-offer">
      <div className="modal-content">
        <div className="top">
          <div className="title">Наши направления:</div>
          <img
            src={closeBtn}
            alt="close"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
        <div className="bottom">
          {pdfs.map((p, i) => {
            return (
              <div className="item" key={`pdf-item-${i}`}>
                <img src={pdfIcn} alt="pdf" />
                <div className="title">{p.title}</div>
                <a className="btn btn-secondary" href={p.url} download>
                  Скачать pdf файл
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;

const pdfs = [
  { title: "Havvo Agro Food", url: havvoagrofoodPdf },
  { title: "Havvo Group", url: havvogroupPdf },
  { title: "Havvo Trust", url: havvotrustPdf },
  { title: "Havvo Noble", url: havvonoblePdf },
];
