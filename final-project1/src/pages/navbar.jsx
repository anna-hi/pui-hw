import { motion } from "motion/react";
import { Link } from "react-router-dom";

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
            src="images/pinkflower.svg"
            width="40"
            className="nav-image"
            alt="pink flower with yellow center"
          />
        </Link>
      </motion.div>
      <div className="nav-right">
        <div className="nav-links">
          <a href="./index.html">
            <h3 className="active-page">Work</h3>
          </a>
          <a href="./fun.html">
            <h3>Fun</h3>
          </a>
          <a href="./about.html">
            <h3>About</h3>
          </a>
          {/* <!-- <a href=""><h3>Resume</h3></a> --> */}
        </div>
        <div></div>
      </div>
    </nav>
  );
}
