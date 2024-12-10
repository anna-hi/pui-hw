import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { loadImages } from "../../utils/utils";

export default function Navbar() {
  return (
    <nav className="navigation">
      <motion.div
        className="nav-image"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Link to="/">
          <img
            src={loadImages('images/pinkflower.svg')}
            width="40"
            className="nav-image"
            alt="pink flower with yellow center"
          />
        </Link>
      </motion.div>
      <div className="nav-right">
        <div className="nav-links">
          <Link to="/" className="nav-individual-link">
            <h3 className="active-page">Work</h3>
          </Link>
          <Link to="https://drive.google.com/file/d/1yLEb9JJwInc0XuviAyUEJXIqHC9Z2nax/view?usp=sharing" className="nav-individual-link">
          <h3>Resume</h3>
          </Link> 
        </div>
        <div></div>
      </div>
    </nav>
  );
}
