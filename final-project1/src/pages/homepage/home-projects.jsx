import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { loadImages } from "../../utils/utils";

// project element shown on home page
export default function HomeProjects({ project }) {
  return (
    <Link to={project.link} class="link">
      <div className="project">
        <div className="project-description">
          <div className="title-with-flower">
            <h3 className="title">{project.title}</h3>
            <img
              src={loadImages(project.flower)}
              width="28px"
              alt={project.altFlower}
            />
          </div>

          <p className="description">{project.description}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
          <div className="take-a-look">
            <p>Take a look</p>
            <img
              src={loadImages("images/homepage/right-arrow.svg")}
              width="20px"
              alt="right arrow"
            />
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} class="project-image">
          <img
            src={loadImages(project.imageFile)}
            alt={project.alt}
            className="project-cover-image"
          />
        </motion.div>
      </div>
    </Link>
  );
}
