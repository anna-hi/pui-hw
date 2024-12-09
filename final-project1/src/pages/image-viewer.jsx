import React, { useState } from "react";

export default function ImageViewer({ src, alt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="image-viewer" onClick={handleImageClick}>
        <img src={src} alt={alt} width="100%" className="" />
      </div>

      {isModalOpen && (
        <div className="image-viewer-modal" onClick={handleCloseModal}>
          <div className="image-viewer-modal-content">
            <img src={src} alt={alt} width="100%" className="" />{" "}
          </div>
        </div>
      )}
    </div>
  );
}
