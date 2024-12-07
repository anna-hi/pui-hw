"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { loadImages } from "../utils/utils";
import "./css/project-styles.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTopButton = () => {
    console.log("hi");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <motion.div
        className="scroll-to-top"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <button onClick={scrollToTopButton} className="scroll-button">
          <img
            src={loadImages("images/up-arrow.svg")}
            width="20"
            alt="up-arrow"
          />
        </button>
      </motion.div>
    )
  );
};
export default ScrollToTopButton;
