import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { loadImages } from "../utils/utils";

export default function ProjectHeader({projectHead}) {
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Create a ResizeObserver to track changes
      // https://react.dev/reference/react/useRef
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          if (backgroundRef.current) {
            backgroundRef.current.style.height = `${entry.contentRect.height}px`; // Update height on changes
          }
        });
      });
      resizeObserver.observe(contentRef.current); // Start observing the element

      return () => {
        resizeObserver.disconnect(); // Cleanup on component unmount
      };
    }
  }, []);
  return (
    <section className="proj-introduction">
    <div className="proj-introduction-content" ref={contentRef}>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="project-title">
          {projectHead.title}
        </h1>
        <h3 className="project-subtext">{projectHead.subtext}</h3>
        <img
          src={loadImages(projectHead.coverImage)}
          width={projectHead.coverImageWidth}
          alt={projectHead.coverImageAlt}
        />
      </motion.div>
      <div className="intro-background-color" ref={backgroundRef} />
    </div>
  </section>
  );
}
