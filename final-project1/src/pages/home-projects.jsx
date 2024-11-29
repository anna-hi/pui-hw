import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function HomeProjects({ project }) {
  return (
    <Link to={project.link} class="link">
      <div className="project">
        <div className="project-description">
          <h3 className="title">{project.title}</h3>
          <p className="description">{project.description}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
          <div className="take-a-look">
            <p>Take a look</p>
            <img src="images/right-arrow.svg" width="20px" alt="right arrow" />
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <img
            src={project.imageFile}
            width="650px"
            alt={project.alt}
            className="project-cover-image"
          />
        </motion.div>
      </div>
    </Link>
  );
}