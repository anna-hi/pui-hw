import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

// makes image bigger when clicked on
export default function ImageViewer({ src, alt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // closes the modal when the user scrolls
  useEffect(() => {
    const handleOnScroll = () => {
      if (isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [isModalOpen]);

  return (
    <div>
      <div className="image-viewer" onClick={handleImageClick}>
        <img src={src} alt={alt} width="100%" />
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="image-viewer-modal"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="image-viewer-modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img src={src} alt={alt} className="image-viewer-modal-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
