import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import bgVid from "../imgs/bg.mp4";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const smallScreenBreakPoint = 375;
const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const handleResize = () => {
    const wWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (wWidth <= smallScreenBreakPoint) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [smallScreen]);
  return (
    <>
      <Section className="main" bg={Bg}>
        <Header setIsMobileOpen={setIsMobileOpen} />
        <Body setIsModalOpen={setIsModalOpen} />
        <Footer />
      </Section>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Main;

const Bg = () => {
  return (
    <video autoPlay muted loop className="main-bg-video" id="main-bg-video">
      <source src={bgVid} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};
